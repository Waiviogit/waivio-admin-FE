import { put, takeEvery, call } from "redux-saga/effects";
import * as authActions from 'redux/actions/authActions';
import api from 'api/AuthConfig/apiAuth';
import { redirect } from "../../helpers/redirect";
import { deleteAuthCookie } from 'helpers/authToken';
import { deleteAuthHeaders, updateCookies } from 'helpers/headers';
import { removeStorageData } from 'helpers/localeStorage';
import { parseCookies, destroyCookie } from 'nookies';
import parseJson from "helpers/parseJson";


export default function* actionWatcher() {
  yield takeEvery(authActions.SIGN_IN_REQUEST, signIn);
  yield takeEvery(authActions.SIGN_OUT_REQUEST, signOut);
}

export function* signIn({ payload, resolve, reject }) {
  try {
    const { data } = yield call([api.auth, api.auth.signIn], payload);
    yield put(authActions.signInSuccess(data));
    yield call(removeStorageData, 'isLogout');
    const cookieData = parseJson(parseCookies());
    yield call(resolve, data);
    yield call(redirect, '/');
  } catch (error) {
    // yield put(showNotification(error));
    yield put(authActions.signInError());
    yield call(reject, error);
  }
}

export function* signOut() {
  try {
    yield call([api.auth, api.auth.signOut]);
    yield put(authActions.signOutSuccess());
    yield call(deleteAuthCookie, 'access-token');
    yield call(removeStorageData, 'isLogin');
    yield call(deleteAuthHeaders);
    yield put(authActions.clearUserStore());
    yield call(redirect, '/login');
  } catch (error) {
    yield put(authActions.signOutError());
    yield call(deleteAuthCookie, 'access-token');
    yield call(deleteAuthHeaders);
    yield put(authActions.clearUserStore());
    yield call(redirect, '/login');
  }
}

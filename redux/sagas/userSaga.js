import { put, takeEvery, call } from "redux-saga/effects";
import * as authActions from 'redux/actions/authActions';
import api from 'api/AuthConfig/apiAuth';
import { redirect } from "../../helpers/redirect";

export default function* actionWatcher() {
  yield takeEvery(authActions.SIGN_IN_REQUEST, signIn);
}

export function* signIn({ payload, resolve, reject }) {
  try {
    yield console.log("SIGN_IN_REQUEST");
    yield console.log(api.auth, 'api.auth');
    const { data } = yield call([api.auth, api.auth.signIn], payload);

    yield put(authActions.signInSuccess(data));
    yield call(resolve, data);
    yield call(redirect, '/');
  } catch (error) {
    // yield put(showNotification(error));
    yield put(authActions.signInError());
    yield call(reject, error);
  }
}

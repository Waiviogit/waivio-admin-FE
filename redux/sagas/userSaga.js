import { put, takeEvery, call } from "redux-saga/effects";
import * as authActions from "../../redux/actions/authActions";
import * as userActions from "../../redux/actions/userActions";
import api from "../../api/AuthConfig/apiAuth";
import { redirect } from "../../helpers/redirect";
import { deleteAuthCookie } from "../../helpers/authToken";
import { deleteAuthHeaders, updateCookies } from "../../helpers/headers";
import { removeStorageData } from "../../helpers/localeStorage";
import { parseCookies, destroyCookie } from "nookies";
import parseJson from "../../helpers/parseJson";

export default function* actionWatcher() {
  yield takeEvery(authActions.SIGN_IN_REQUEST, signIn);
  yield takeEvery(authActions.SIGN_OUT_REQUEST, signOut);
  yield takeEvery(userActions.UPGRADE_STATUS_TO_MODERATOR_REQUEST, upgradeToModerator);
  yield takeEvery(userActions.UPGRADE_STATUS_TO_USER_REQUEST, upgradeToUser);
  yield takeEvery(userActions.UPDATE_MODERATOR_REQUEST, updateModerator);
}

export function* signIn({ payload, resolve, reject }) {
  try {
    const { data } = yield call([api.auth, api.auth.signIn], payload);
    yield put(authActions.signInSuccess(data));
    yield call(removeStorageData, "isLogout");
    const cookieData = parseJson(parseCookies());
    yield call(resolve, data);
    yield call(redirect, "/");
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
    yield call(deleteAuthCookie, "authorization");
    yield call(removeStorageData, "isLogin");
    yield call(removeStorageData, "userEmail");
    yield call(deleteAuthHeaders);
    yield put(authActions.clearUserStore());
    yield call(redirect, "/login");
  } catch (error) {
    yield put(authActions.signOutError());
    yield call(deleteAuthCookie, "authorization");
    yield call(deleteAuthHeaders);
    yield put(authActions.clearUserStore());
    yield call(redirect, "/login");
  }
}

export function* upgradeToModerator({ payload, resolve, reject }) {
  try {
    const { data } = yield call([api.statusOfUser, api.statusOfUser.upgradeToModerator], payload);
    yield call(resolve, data);
    yield put(userActions.upgradeStatusToModeratorSuccess());
    // yield call(showSuccessNotification, {
    //   id:
    //     payload.ids.length === 1
    //       ? "demo_user_upgraded_to_user"
    //       : "demo_user_upgraded_to_users"
    // });
  } catch (error) {
    // yield put(showNotification(error));
    yield put(userActions.upgradeStatusToModeratorError());
    yield call(reject, error);

  }
}

export function* upgradeToUser({ payload, resolve, reject }) {
  try {
    const { data } = yield call([api.statusOfUser, api.statusOfUser.upgradeToUser], payload);
    yield call(resolve, data);
    yield put(userActions.upgradeStatusToUserSuccess());
    // yield call(showSuccessNotification, {
    //   id:
    //     payload.ids.length === 1
    //       ? "demo_user_upgraded_to_user"
    //       : "demo_user_upgraded_to_users"
    // });
  } catch (error) {
    // yield put(showNotification(error));
    yield put(userActions.upgradeStatusToUserError());
    yield call(reject, error);

  }
}

export function* updateModerator({ payload, resolve, reject }) {
  try {
    const { data } = yield call([api.statusOfUser, api.statusOfUser.updateModerator], payload);
    yield call(resolve, data);
    yield put(userActions.upgradeModeratorSuccess());
    // yield call(showSuccessNotification, {
    //   id:
    //     payload.ids.length === 1
    //       ? "demo_user_upgraded_to_user"
    //       : "demo_user_upgraded_to_users"
    // });
  } catch (error) {
    // yield put(showNotification(error));
    yield put(userActions.upgradeModeratorError());
    yield call(reject, error);

  }
}

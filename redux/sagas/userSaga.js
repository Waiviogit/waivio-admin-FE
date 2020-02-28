import { put, takeEvery, call } from "redux-saga/effects";
import { parseCookies } from "nookies";
import * as authActions from "../actions/authActions";
import * as userActions from "../actions/userActions";
import api from "../../api/AuthConfig/apiAuth";
import { redirect } from "../../helpers/redirect";
import { deleteAuthCookie } from "../../helpers/authToken";
import { deleteAuthHeaders, updateCookies } from "../../helpers/headers";
import { removeStorageData } from "../../helpers/localeStorage";
import parseJson from "../../helpers/parseJson";
import * as appsActions from '../actions/appsActions';

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

export function* upgradeToModerator({ payload, resolve, reject, ctx }) {
    try {
        const { data, headers } = yield call([api.statusOfUser, api.statusOfUser.upgradeToModerator], payload);
        yield call(updateCookies, headers, ctx);
        yield call(resolve, data);
        yield put(userActions.upgradeStatusToModeratorSuccess());
        yield put(appsActions.updateAllAps(ctx));
    } catch (error) {
        yield put(userActions.upgradeStatusToModeratorError());
        yield call(reject, error);
    }
}

export function* upgradeToUser({ payload, resolve, reject, ctx }) {
    try {
        const { data, headers } = yield call([api.statusOfUser, api.statusOfUser.upgradeToUser], payload);
        yield call(updateCookies, headers, ctx);
        yield call(resolve, data);
        yield put(userActions.upgradeStatusToUserSuccess());
        yield put(appsActions.updateAllAps(ctx));
    } catch (error) {
        yield put(userActions.upgradeStatusToUserError());
        yield call(reject, error);
    }
}

export function* updateModerator({ payload, resolve, reject, ctx }) {
    try {
        const { data, headers } = yield call([api.statusOfUser, api.statusOfUser.updateModerator], payload);
        yield call(updateCookies, headers, ctx);
        yield call(resolve, data);
        yield put(userActions.upgradeModeratorSuccess());
        yield put(appsActions.updateAllAps(ctx));
    } catch (error) {
        yield put(userActions.upgradeModeratorError());
        yield call(reject, error);
    }
}

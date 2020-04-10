import { put, takeEvery, call, select } from "redux-saga/effects";
import * as appsActions from "../actions/appsActions";
import api from "../../api/AuthConfig/apiAuth";
import { updateCookies } from "../../helpers/headers";
import { getAdminState } from '../selectors/userSelectors';

export default function* actionWatcher() {
    yield takeEvery(appsActions.GET_ALL_APPS_REQUEST, getAllApps);
    yield takeEvery(appsActions.UPDATE_ALL_APPS_REQUEST, updateAllApps);
    yield takeEvery(appsActions.CREATE_SERVICE_BOT_REQUEST, createServiceBot);
    yield takeEvery(appsActions.UPDATE_SERVICE_BOT_REQUEST, updateServiceBot);
    yield takeEvery(appsActions.DELETE_SERVICE_BOT_REQUEST, deleteServiceBot);
    yield takeEvery(appsActions.DELETE_BLACK_LIST_USER_REQUEST, deleteBlackListUsers);
    yield takeEvery(appsActions.ADD_BLACK_LIST_USER_REQUEST, addBlackListUsers);
}

export function* getAllApps({ payload, resolve, reject, ctx }) {
    try {
        const { data, headers } = yield call([api.apps, api.apps.getAllApps], payload);
        yield call(updateCookies, headers, ctx);
        yield call(resolve, data);
        yield put(appsActions.getAllAppsSuccess({ data }));
    } catch (error) {
        yield put(appsActions.updateAllAps(ctx));
        yield put(appsActions.getAllAppsError());
        yield call(reject, error);
    }
}

export function* updateAllApps({ ctx }) {
    const { email } = yield select(getAdminState);
    try {
        const { data, headers } = yield call([api.apps, api.apps.getAllApps], email);
        yield call(updateCookies, headers, ctx);
        yield put(
            appsActions.getAllAppsSuccess({ data }),
        );
    } catch (error) {
        yield put(appsActions.getAllAppsError());
    }
}

export function* createServiceBot({ payload, resolve, reject, ctx }) {
    try {
        const { data, headers } = yield call([api.apps, api.apps.createServiceBot], payload);
        yield call(updateCookies, headers, ctx);
        yield call(resolve, data);
        yield put(appsActions.createServiceBotSuccess());
        yield put(appsActions.updateAllAps(ctx));
    } catch (error) {
        yield put(appsActions.createServiceBotError());
        yield call(reject, error);
    }
}

export function* updateServiceBot({ payload, resolve, reject, ctx }) {
    try {
        const { data, headers } = yield call([api.apps, api.apps.updateServiceBot], payload);
        yield call(updateCookies, headers, ctx);
        yield call(resolve, data);
        yield put(appsActions.updateServiceBotSuccess());
        yield put(appsActions.updateAllAps(ctx));
    } catch (error) {
        yield put(appsActions.updateServiceBotError());
        yield call(reject, error);
    }
}

export function* deleteServiceBot({ payload, resolve, reject, ctx }) {
    try {
        const { data, headers } = yield call([api.apps, api.apps.deleteServiceBot], payload);
        yield call(updateCookies, headers, ctx);
        yield call(resolve, data);
        yield put(appsActions.deleteServiceBotSuccess());
        yield put(appsActions.updateAllAps(ctx));
    } catch (error) {
        yield put(appsActions.deleteServiceBotError());
        yield call(reject, error);
    }
}

export function* deleteBlackListUsers({ payload, resolve, reject, ctx }) {
    try {
        const { data, headers } = yield call([api.apps, api.apps.deleteBlackListUsers], payload);
        yield call(updateCookies, headers, ctx);
        yield call(resolve, data);
        yield put(appsActions.deleteBlackListUsersSuccess());
        yield put(appsActions.updateAllAps(ctx));
    } catch (error) {
        yield put(appsActions.deleteBlackListUsersError());
        yield call(reject, error);
    }
}

export function* addBlackListUsers({ payload, resolve, reject, ctx }) {
    try {
        const { data, headers } = yield call([api.apps, api.apps.addBlackListUsers], payload);
        yield call(updateCookies, headers, ctx);
        yield call(resolve, data);
        yield put(appsActions.addBlackListUsersSuccess());
        yield put(appsActions.updateAllAps(ctx));
    } catch (error) {
        yield put(appsActions.addBlackListUsersError());
        yield call(reject, error);
    }
}

export function* deleteSupportedHashtags({ payload, resolve, reject, ctx }) {
    try {
        const { data, headers } = yield call([api.apps, api.apps.deleteSupportedHashtags], payload);
        yield call(updateCookies, headers, ctx);
        yield call(resolve, data);
        yield put(appsActions.deleteSupportedHashtagsSuccess());
        yield put(appsActions.updateAllAps(ctx));
    } catch (error) {
        yield put(appsActions.deleteSupportedHashtagsError());
        yield call(reject, error);
    }
}

export function* addSupportedHashtags({ payload, resolve, reject, ctx }) {
    try {
        const { data, headers } = yield call([api.apps, api.apps.addSupportedHashtags], payload);
        yield call(updateCookies, headers, ctx);
        yield call(resolve, data);
        yield put(appsActions.addSupportedHashtagsSuccess());
        yield put(appsActions.updateAllAps(ctx));
    } catch (error) {
        yield put(appsActions.addSupportedHashtagsError());
        yield call(reject, error);
    }
}

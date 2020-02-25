import { put, takeEvery, call } from "redux-saga/effects";
import * as appsActions from "../actions/appsActions";
import api from "../../api/AuthConfig/apiAuth";
import { deleteAuthHeaders, updateCookies } from "../../helpers/headers";

export default function* actionWatcher() {
    yield takeEvery(appsActions.GET_ALL_APPS_REQUEST, getAllApps);
    yield takeEvery(appsActions.CREATE_SERVICE_BOT_REQUEST, createServiceBot);
    yield takeEvery(appsActions.UPDATE_SERVICE_BOT_REQUEST, updateServiceBot);
}

export function* getAllApps({ payload, resolve, reject, ctx }) {
    try {
        console.log(payload);
        const { data, headers } = yield call([api.apps, api.apps.getAllApps], payload);
        yield call(updateCookies, headers, ctx);
        yield call(resolve, data);
        yield put(
            appsActions.getAllAppsSuccess({
                data,
                isPage: payload ? payload.isPage : false,
            }),
        );
    } catch (error) {
    // yield put(showNotification(error));
        yield put(appsActions.getAllAppsError());
        yield call(reject, error);
    }
}

export function* createServiceBot({ payload, resolve, reject }) {
    try {
        const { data } = yield call([api.apps, api.apps.createServiceBot], payload);
        yield call(resolve, data);
        yield put(appsActions.createServiceBotSuccess());
    // yield call(showSuccessNotification, {
    //   id:
    //     payload.ids.length === 1
    //       ? "demo_user_upgraded_to_user"
    //       : "demo_user_upgraded_to_users"
    // });
    } catch (error) {
    // yield put(showNotification(error));
        yield put(appsActions.createServiceBotError());
        yield call(reject, error);
    }
}

export function* updateServiceBot({ payload, resolve, reject }) {
    try {
        console.log('updateServiceBot', payload);
        const { data } = yield call([api.apps, api.apps.updateServiceBot], payload);
        yield call(resolve, data);
        yield put(appsActions.updateServiceBotSuccess());
    // yield call(showSuccessNotification, {
    //   id:
    //     payload.ids.length === 1
    //       ? "demo_user_upgraded_to_user"
    //       : "demo_user_upgraded_to_users"
    // });
    } catch (error) {
    // yield put(showNotification(error));
        yield put(appsActions.updateServiceBotError());
        yield call(reject, error);
    }
}

export function* deleteServiceBot({ payload, resolve, reject }) {
    try {
        const { data } = yield call([api.apps, api.apps.deleteServiceBot], payload);
        yield call(resolve, data);
        yield put(appsActions.deleteServiceBotSuccess());
    // yield call(showSuccessNotification, {
    //   id:
    //     payload.ids.length === 1
    //       ? "demo_user_upgraded_to_user"
    //       : "demo_user_upgraded_to_users"
    // });
    } catch (error) {
    // yield put(showNotification(error));
        yield put(appsActions.deleteServiceBotError());
        yield call(reject, error);
    }
}

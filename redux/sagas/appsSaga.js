import { put, takeEvery, call } from "redux-saga/effects";
import * as appsActions from "../../redux/actions/appsActions";
import api from "../../api/AuthConfig/apiAuth";
import { deleteAuthHeaders, updateCookies } from "../../helpers/headers";

export default function* actionWatcher() {
  yield takeEvery(appsActions.GET_ALL_APPS_REQUEST, getAllApps);
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
        isPage: payload ? payload.isPage : false
      })
    );
  } catch (error) {
    // yield put(showNotification(error));
    yield put(appsActions.getAllAppsError());
    yield call(reject, error);
  }
}

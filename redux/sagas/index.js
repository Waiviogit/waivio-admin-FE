import { all } from 'redux-saga/effects';
import usersSaga from './userSaga';
import appsSaga from './appsSaga';

export default function* rootSaga() {
    yield all([
        usersSaga(),
        appsSaga(),
    ]);
}

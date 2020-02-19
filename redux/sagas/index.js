import { all } from 'redux-saga/effects';
import usersSaga from './userSaga';

export default function* rootSaga() {
    yield all([
        usersSaga(),
    ]);
}

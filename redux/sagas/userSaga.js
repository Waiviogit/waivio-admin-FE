import { put, takeEvery, call } from "redux-saga/effects";

export default function* actionWatcher() {
  yield takeEvery("SIGN_IN_REQUEST", signIn);
}

export function* signIn({ payload, resolve, reject }) {
  yield console.log("SIGN_IN_REQUEST");
}

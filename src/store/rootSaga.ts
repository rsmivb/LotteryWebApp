import { all } from "@redux-saga/core/effects";
import { loadListsSagas } from "./load-list-saga";

export default function* rootSaga() {
  yield all([
    loadListsSagas(),
  ]);
}
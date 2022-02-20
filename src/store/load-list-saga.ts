import { Action } from "redux";
import { all, call, put, takeLatest } from "redux-saga/effects";
import LotteryApi, { ILottery } from "../api/lottery";
import { finishLoadList, loadList } from "./load-list-slice";

export function* loadListsSagas() {
  yield all([
    watchLoadLists(),
  ]);
}

function* watchLoadLists() {
  yield takeLatest(loadList, function* loadMyLists(action: Action) {
    if (!loadList.match(action)) {
      return;
    }

    try {
      const listLoaded: ILottery = yield call(LotteryApi.getValues, "someValue");

      yield put(finishLoadList({
        isWorking: false,
        data: listLoaded
      }));
    } catch (err) {
      // Get error message.
      //yield put(finishLoadingMyAudits({
      //  isWorking: false,
      //  errorMessage: getResponseErrorMessage(err),
      //}));
    }
  });
}

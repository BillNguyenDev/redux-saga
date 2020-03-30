import { fork, take, call, put } from 'redux-saga/effects';
import * as taskTypes from './../constants/task';
import { getList } from './../apis/task';
import { STATUS_CODE } from './../constants';
import { fetchListTaskSuccess, fetchListTaskFailed } from './../actions/task';
function* watchFetchListTaskAction() {
  yield take(taskTypes.FETCH_TASK);
  const resp = yield call(getList);
  const { status, data } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchListTaskSuccess(data));
  } else {
    yield put(fetchListTaskFailed(data));
  }
}

function* watchCreateTaskAction() {

}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;

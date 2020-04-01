import { fork, take, call, put, delay, takeLatest, takeEvery, select } from 'redux-saga/effects';
import * as taskTypes from './../constants/task';
import { getList, addTask, editTask } from './../apis/task';
import { STATUS_CODE, STATUSES } from './../constants';
import {
  fetchListTaskSuccess,
  fetchListTaskFailed,
  addTaskSuccess,
  addTaskFailed,
  fetchListTask,
  editTaskSuccess,
  editTaskFailed,
} from './../actions/task';
import { showLoading, hideLoading } from './../actions/ui';
import { hideModal } from './../actions/modal';

function* watchFetchListTaskAction() {
  while (true) {
    const action = yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const { params } = action.payload;
    const resp = yield call(getList, params);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading())
  }
}

function* watchCreateTaskAction() {

}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  yield put(fetchListTask({
    q: keyword,
  }))
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(showLoading());
  const resp = yield call(addTask, {
    title,
    description,
    status: STATUSES[0].value,

  });
  const { data, status } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}


function* editTaskSaga({ payload }) {
  const { title, description, status } = payload;
  const taskEditing = yield select(state => state.task.taskEditing);
  yield put(showLoading());
  const resp = yield call(editTask, {
    title,
    description,
    status,
  },taskEditing.id);
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(editTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(editTaskFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
  yield takeEvery(taskTypes.EDIT_TASK, editTaskSaga);
}

export default rootSaga;

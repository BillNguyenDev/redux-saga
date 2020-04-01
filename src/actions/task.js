import * as taskConstants from './../constants/task';
import { STATUSES } from '../constants';

export const fetchListTask = (params = {}) => {
  return {
    type: taskConstants.FETCH_TASK,
    payload: {
      params,
    }
  };
};

export const fetchListTaskSuccess = data => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data
    }
  };
};

export const fetchListTaskFailed = error => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error
    }
  };
};

export const addTask = (title, description) => {
  return {
    type: taskConstants.ADD_TASK,
    payload: {
      title,
      description,
    },
  };
};

export const addTaskSuccess = data => {
  return {
    type: taskConstants.ADD_TASK_SUCCESS,
    payload: {
      data
    }
  };
};

export const addTaskFailed = error => {
  return {
    type: taskConstants.ADD_TASK_FAILED,
    payload: {
      error
    }
  };
};

export const editTask = (title, description, status = STATUSES[0].value) => {
  return {
    type: taskConstants.EDIT_TASK,
    payload: {
      title,
      description,
      status,
    },
  };
};

export const editTaskSuccess = data => {
  return {
    type: taskConstants.EDIT_TASK_SUCCESS,
    payload: {
      data
    }
  };
};

export const editTaskFailed = error => {
  return {
    type: taskConstants.EDIT_TASK_FAILED,
    payload: {
      error
    }
  };
};


export const filterTask = keyword => ({
  type: taskConstants.FILTER_TASK,
  payload: {
    keyword,
  }
});

export const filterTaskSuccess = data => ({
  type: taskConstants.FILTER_TASK_SUCCESS,
  payload: {
    data,
  }
});

export const setTaskEditing = task => ({
  type: taskConstants.SET_TASK_EDITING,
  payload: {
    task,
  }
})

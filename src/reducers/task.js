import * as taskConstants from './../constants/task';
import { toastError, toastSuccess } from './../commons/helpers/toastHelpers';

const initialsate = {
  listTask: [],
  taskEditing: null,
};

const reducer = (state = initialsate, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK: {
      return {
        ...state,
        listTask: []
      };
    }
    case taskConstants.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data
      };
    }
    case taskConstants.FETCH_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listTask: []
      };
    }
    case taskConstants.FILTER_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      }
    }
    case taskConstants.ADD_TASK: {
      return {
        ...state,
        taskEditing: null,
      }
    }
    case taskConstants.ADD_TASK_SUCCESS: {
      const { data } = action.payload;
      toastSuccess('Thêm công việc thành công');
      return {
        ...state,
        listTask: [data].concat(state.listTask),
      }
    }
    case taskConstants.ADD_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      }
    }
    case taskConstants.EDIT_TASK: {
      return {
        ...state,
      }
    }
    case taskConstants.EDIT_TASK_SUCCESS: {
      const { data } = action.payload;
      const result = state.listTask.map(item => item.id === state.taskEditing.id ? data : item);
      toastSuccess('Cập nhập công việc thành công');
      return {
        ...state,
        listTask: result,
      }
    }
    case taskConstants.EDIT_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      }
    }
    case taskConstants.DELETE_TASK: {
      return {
        ...state,
      }
    }
    case taskConstants.DELETE_TASK_SUCCESS: {
      const { data: taskId } = action.payload;
      const result = state.listTask.filter(item => item.id !== taskId);
      toastSuccess('Xóa công việc thành công');
      return {
        ...state,
        listTask: result,
      }
    }
    case taskConstants.DELETE_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      }
    }
    case taskConstants.SET_TASK_EDITING: {
      const { task } = action.payload;
      return {
        ...state,
        taskEditing: task,
      }
    }
    default:
      return state;
  }
}

export default reducer;

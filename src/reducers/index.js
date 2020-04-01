import { combineReducers } from 'redux';
import task from './task';
import ui from './ui';
import modal from './modal';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  task,
  ui,
  modal,
  form,
});

export default rootReducer;

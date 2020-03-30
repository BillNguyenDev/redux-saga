import { combineReducers } from 'redux';
import task from './task';
import ui from './ui'
const rootReducer = combineReducers({
  task,
  ui
});

export default rootReducer;

import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import tasksReducer from './tasksReducer';

export default combineReducers({
  tasks: tasksReducer,
  categories: categoriesReducer,
});

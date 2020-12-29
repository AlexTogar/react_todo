import ReactDOM from 'react-dom';
import React from 'react';
import Application from './components/Application';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tasksReducer from './reducers/tasksReducer';
import Tasks from './Tasks.json';

const tasksStore = createStore(tasksReducer, Tasks);
console.log(tasksStore);

ReactDOM.render(
  <Provider store={tasksStore}>
    <Application />
  </Provider>,
  document.getElementById('root')
);

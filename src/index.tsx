import ReactDOM from 'react-dom';
import React from 'react';
import Application from './components/Application';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducer from './reducers/allReducer';

const tasksStore = createStore(allReducer);

ReactDOM.render(
  <Provider store={tasksStore}>
    <Application />
  </Provider>,
  document.getElementById('root')
);

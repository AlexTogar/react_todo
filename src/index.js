import ReactDOM from 'react-dom';
import React from 'react';
import Application from './components/Application';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducer from './reducers/allReducer';
import Tasks from './Tasks.json';
import Categories from './Categoies.json';

const tasksStore = createStore(allReducer);

console.log(tasksStore);  

ReactDOM.render(
  <Provider store={tasksStore}>
    <Application />
  </Provider>,
  document.getElementById('root')
);

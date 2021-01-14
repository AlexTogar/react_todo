import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

//service-worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}

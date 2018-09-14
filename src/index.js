import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';


const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
  }

  return state
}

const store = createStore(counterReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>

, document.getElementById('root'));

registerServiceWorker();

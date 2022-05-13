import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,applyMiddleware,compose} from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { allreducers } from './reducers';
import { BrowserRouter } from 'react-router-dom';


const composeenhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainstore = createStore(allreducers,composeenhancer(applyMiddleware(thunk)))



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={mainstore}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



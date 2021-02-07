import React from 'react';
import ReactDOM from 'react-dom';
import '@progress/kendo-theme-material/dist/all.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import store from "./store";

import {Provider} from 'react-redux'

import  Search  from './components/mainsearch/Search';

ReactDOM.render(
  
    <Provider store={store}>
    <App />
    </Provider>
    
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./reducer";

var destination = document.querySelector("#container");

var store = createStore(cartReducer);//create our store with the createStore method

ReactDOM.render(
  <Provider store={store}>   {/*pass in our store to the Provider component as a prop*/}
    <App />
  </Provider>,
  destination
);
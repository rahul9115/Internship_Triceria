import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import { Provider } from 'react-redux';
import random from "../src/js/random";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
ReactDOM.render(<App />, document.querySelector('#root'));
ReactDOM.render(<span dangerouslySetInnerHTML={random()}></span>, document.getElementById("input"));


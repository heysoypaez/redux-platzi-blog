import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers/index.js";

const store = createStore(

	reducers, //all reducers	
	{}, //initial state
	applyMiddleware(reduxThunk)
);

ReactDOM.render(
	
  <Provider store={store} >
		<App />
  </Provider>
	, 
	document.getElementById('root')
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";

// import {applyMiddleware, compose} from 'redux'
// import {createStore} from 'redux'
// import thunk from "redux-thunk"
// import Reducers from "./Reducers"

// const store=createStore(Reducers,compose(applyMiddleware(thunk)))

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//update on 01/08
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, compose, legacy_createStore } from "redux"; // Use legacy_createStore
import thunk from "redux-thunk";
// import rootReducer from "./reducers"; // Ensure this is correctly pointing to your root reducer
import combineReducers  from "./Reducers"

const store = legacy_createStore(
  combineReducers,
  compose(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();

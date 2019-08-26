import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleWare from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";
import Profile from "./Profile";
import reducers from "./reducers/RootReducer";
import * as serviceWorker from "./serviceWorker";

const loggerMiddleWare = createLogger();
const store = createStore(reducers, applyMiddleware(loggerMiddleWare));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Profile} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

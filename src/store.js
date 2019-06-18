import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import reducers from "./reducers";

// Put all development middlewares here
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let middlewares = composeEnhancers(applyMiddleware(logger));

if (process.env.NODE_ENV === "production") {
  middlewares = applyMiddleware();
}

const store = createStore(reducers, {}, middlewares);

export default store;

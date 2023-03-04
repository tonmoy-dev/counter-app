import { createStore, applyMiddleware } from "redux";
import counterReducer from "./counter/counterReducer";
import logger from "./middlewares/logger";
import ReduxLogger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./rootReducer";

// redux always expect one reducer function.
// const store = createStore(counterReducer, applyMiddleware(ReduxLogger));
const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(ReduxLogger))
);

// use multiple middlewares
// const store = createStore(counterReducer, applyMiddleware(ReduxLogger, logger));

// use combined reducers
// const store = createStore(rootReducer);

export default store;

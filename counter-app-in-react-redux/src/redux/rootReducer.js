import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  // other reducers ...
});

/*
now for count state ...
count -> state.counter.count 
*/

export default rootReducer;

import { INCREMENT, DECREMENT } from "./actionTypes";

export const increment = function (value) {
  return {
    type: INCREMENT,
    payload: value,
  };
};

export const decrement = function (value) {
  return {
    type: DECREMENT,
    payload: value,
  };
};

import { INCREMENT, DECREMENT } from "./actionTypes";

const initialState = {
  count: 0,
};
const counterReducer = function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
      break;
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
      break;
    default:
      return state;
  }
};

export default counterReducer;

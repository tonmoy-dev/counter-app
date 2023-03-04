import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/counter/actionCreators";

function HooksCounter() {
  // select state from redux store, useSelector function gives us state.
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  // create increment & decrement function to dispatch actions
  const incrementHandler = (value) => {
    dispatch(increment(value));
  };
  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold" id="count">
          {count}
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => incrementHandler(5)}
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            id="increment"
          >
            Increment
          </button>
          <button
            onClick={() => decrementHandler(3)}
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
            id="decrement"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
export default HooksCounter;

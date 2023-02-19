import { useState } from "react";

function Counter() {
  // state part ...
  // counter state
  const [count, setCount] = useState(0);

  // handler part...
  // increment & decrement handlers which updates the count value.
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // view part of the UI..
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold" id="count">
          {count}
        </div>
        <div className="flex space-x-3">
          <button
            onClick={increment}
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            id="increment"
          >
            Increment
          </button>
          <button
            onClick={decrement}
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
export default Counter;

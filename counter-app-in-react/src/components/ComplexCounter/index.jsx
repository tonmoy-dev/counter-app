import { useState } from "react";
import Stats from "./Stats";
import Counter from "./Counter";

// set initialValue to the two counters
const initializeCounters = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];
const ComplexCounter = () => {
  const [counters, setCounters] = useState(() => initializeCounters);

  const increment = (id) => {
    // check the two counters, then if the condition matches, the counter will be updated with its new count value & return new array.
    const updatedCounters = counters.map((counter) => {
      if (counter.id === id) {
        // handle the changes of the counter immutable way.
        return { ...counter, count: counter.count + 1 };
      }
      // update the counter immutably.
      return { ...counter };
    });
    // set the setter function of counters
    setCounters(updatedCounters);
  };

  const decrement = (id) => {
    // check the two counters, then if the condition matches, the counter will be updated with its new count value & return new array.
    const updatedCounters = counters.map((counter) => {
      if (counter.id === id) {
        // handle the changes of the counter immutable way.
        return { ...counter, count: counter.count - 1 };
      }
      // update the counter immutably.
      return { ...counter };
    });
    // set the setter function of counters
    setCounters(updatedCounters);
  };
  // console.log(counters);

  /*
  array.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    initialValue
  );
  */

  // use the array.reduce method to get the sum of the count values of the two counters.
  const totalCount = counters.reduce(
    (total, counter) => total + counter.count,
    0
  );

  return (
    <div className="w-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Complex Counter Application
      </h1>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          count={counter.count}
          decrement={() => decrement(counter.id)}
          increment={() => increment(counter.id)}
        />
      ))}
      <Stats totalCount={totalCount} />
    </div>
  );
};
export default ComplexCounter;

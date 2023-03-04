import { useState } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../../redux/counter/actionCreators";

function Counter({ count, increment, decrement, title }) {
  // state part ...
  // counter state
  // const [count, setCount] = useState(0);

  // handler part...
  // increment & decrement handlers which updates the count value.
  /*const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };*/

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

// using Higher order components -> it takes an component as its parameter and returns an component.
/* const newComponent = HOC(originalComponent) */
// connect() -> connect component -> HOC component
// mapStateToProps -> convert store state to props, mapDispatchToProps -> convert dispatch to props
// ownProps -> provided props in the component itself

/* Old way of Redux, when React works with class based components*/
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return {
    count: state.count,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

/*
Connect API
mapStateToProps() and mapDispatchToProps()
*/

// Redux Patterns
// initialState -> actions -> reducer() -> store -> getState() -> subscribe() => action dispatch ...

// select elements
const countEl = document.getElementById("count");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// console.log(countEl, incrementEl, decrementEl);

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators -> this are creating actions, when eventListeners are dispatching actions
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// initial state
const initialState = {
  count: 0,
};

// reducer function
function countReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      count: state.count + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      count: state.count - action.payload,
    };
  } else {
    return state;
  }
}

// console.log(Redux);
// creating store for Redux
const store = Redux.createStore(countReducer);
// console.log(store);

// render function to get state from store and update to UI
const render = () => {
  const state = store.getState();
  countEl.innerText = state.count;
};
render();

/*
"subscribe" is a method that allows you to listen for changes to the state of your application.
When you subscribe to the Redux store, you are essentially telling it to call a specified function every time the state changes.
*/

// subscribe to the store
store.subscribe(render);

// add event listeners to increment & decrement elements
incrementEl.addEventListener("click", () => {
  // dispatch the action to the store
  store.dispatch(
    increment(2)
    // {type: INCREMENT}
  );
  // render();
});
decrementEl.addEventListener("click", () => {
  // dispatch the action to the store
  store.dispatch(
    decrement(1)
    // {type: DECREMENT}
  );
  // render();
});

//  "dispatch" is a method that allows you to update the state of your application by dispatching actions to the Redux store.

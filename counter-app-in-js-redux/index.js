// Redux Patterns
// initialState -> actions -> reducer() -> store -> getState() -> subscribe() => action dispatch ...

// select elements
const countEl = document.getElementById("count");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// console.log(countEl, incrementEl, decrementEl);

// initial state
const initialState = {
  count: 0,
};
// actions
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
// reducer function
function countReducer(state = initialState, action) {
  if (action.type === ACTIONS.INCREMENT) {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === ACTIONS.DECREMENT) {
    return {
      ...state,
      count: state.count - 1,
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
  store.dispatch({
    type: ACTIONS.INCREMENT,
  });
  // render();
});
decrementEl.addEventListener("click", () => {
  // dispatch the action to the store
  store.dispatch({
    type: ACTIONS.DECREMENT,
  });
  // render();
});

//  "dispatch" is a method that allows you to update the state of your application by dispatching actions to the Redux store.

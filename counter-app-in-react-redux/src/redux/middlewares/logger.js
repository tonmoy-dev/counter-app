import counterReducer from "../counter/counterReducer";

// creating middleware using currying function
// store, next, action
const logger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);

  // generate upcoming state, calling reducer function yourself
  const upcomingState = [action].reduce(counterReducer, store.getState());
  console.log(`Upcoming: ${JSON.stringify(upcomingState)}`);

  // pass action
  return next(action); // without return the action in next, redux can't call reducer function
};

export default logger;

/*
// currying function examples

// Using pure function
function sum(a,b,c){
  return a+b+c;
}
sum(1,2,3)  // 6

// Using currying function
function curriedSum(a){
  return function(b) {
    return function(c) {
      return a+b+c;
    }
  }
}
curriedSum(1)(2)(3);  // 6
*/

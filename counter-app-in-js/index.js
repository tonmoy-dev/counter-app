// create a counter app using JS DOM manipulation.

// select elements
const countEl = document.getElementById("count");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// count state
let count = 0;

// add event listener to the increment element
incrementEl.addEventListener("click", () => {
  count++;
  countEl.innerText = count;
});

// add event listener to the decrement element
decrementEl.addEventListener("click", () => {
  count--;
  countEl.innerText = count;
});

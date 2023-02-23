// select elements
const countEl = document.getElementById("count");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// console.log(countEl, incrementEl, decrementEl);

// initial state
let count = 0;
countEl.innerText = count;

// add event listeners to increment & decrement elements
incrementEl.addEventListener("click", () => {
  count++;
  countEl.innerText = count;
});
decrementEl.addEventListener("click", () => {
  count--;
  countEl.innerText = count;
});

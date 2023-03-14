let counterValue = 0;
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const spanButton = document.querySelector("#value");

const plusClick = () => {
  counterValue = counterValue + 1;
  spanButton.textContent = counterValue;
};
const minusClick = () => {
  counterValue = counterValue - 1;
  spanButton.textContent = counterValue;
};

incrementButton.addEventListener("click", plusClick);
decrementButton.addEventListener("click", minusClick);

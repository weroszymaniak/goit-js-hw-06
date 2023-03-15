const validationInput = document.querySelector("input");

const handleInput = (event) => {
  if (
    event.currentTarget.value.length === Number(validationInput.dataset.length)
  ) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
};
validationInput.addEventListener("blur", handleInput);

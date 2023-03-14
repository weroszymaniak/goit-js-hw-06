const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if (event.target.value) {
    textOutput.textContent = event.target.value;
  } else textOutput.textContent = `Anonymus`;
});

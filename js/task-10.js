function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div style="width:${Math.floor(i * 10 + 20)}px; height: ${Math.floor(
        i * 10 + 20
      )}px; background-color: ${getRandomHexColor()};"></div`
    );
  }
}
const handler = () => {
  const amount = document.querySelector("#controls input[type=number]").value;
  boxes.innerHTML = null;
  createBoxes(amount);
};

const remover = () => {
  boxes.innerHTML = null;
};

createBtn.addEventListener("click", handler);
destroyBtn.addEventListener("click", remover);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const buttonChange = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

const changeColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
};

buttonChange.addEventListener("click", changeColor);

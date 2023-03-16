const controler = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const sizeChange = () => {
  text.style.fontSize = controler.value + "px";
};

controler.addEventListener("input", sizeChange);

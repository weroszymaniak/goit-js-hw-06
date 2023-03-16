const form = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Proszę wypełnić wszystkie pola!");
  }

  const elementObj = {
    email: email.value,
    password: password.value,
  };

  return console.log(elementObj);
  event.currentTarget.reset();
}
form.addEventListener("submit", handleSubmit);

const email = document.getElementById("email");
const username = document.getElementById("username");

email.addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email address.");
  } else {
    email.setCustomValidity("");
  }
});

username.addEventListener("input", () => {
  if (username.validity.tooShort) {
    username.setCustomValidity("The username needs to be at least 8 characters long.");
  } if (username.validity.tooLong) {
    username.setCustomValidity("The username can not exceed 20 characters.");
  } else {
    username.setCustomValidity("");
  }
});

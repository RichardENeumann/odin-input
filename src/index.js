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

function debounce(func, delay = 250) {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

async function checkUsernameAvailable() {
  const checkUserURL = "./logic/checkuser.php";
  const checkUserOptions = new URLSearchParams({
    username: username.value,
  });

  const result = await fetch(`${checkUserURL}?${checkUserOptions}`);
  const responseBody = await result.text();
  const usernameValid = JSON.parse(responseBody).valid;

  if (usernameValid) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

const debCheckUsernameAvailable = debounce(checkUsernameAvailable, 1000);

username.addEventListener("input", debCheckUsernameAvailable);

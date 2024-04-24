// Check if the entered email address is valid and give custom hints
const email = document.getElementById("email");
const username = document.getElementById("username");

email.addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email address.");
  } else {
    email.setCustomValidity("");
  }
});

// Check if the provided username is available and within constraints
function debounce(func, delay = 500) {
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

  if (!usernameValid) {
    username.setCustomValidity("This username is already taken.");
  }
}

const debCheckUsernameAvailable = debounce(checkUsernameAvailable, 500);

username.addEventListener("input", debCheckUsernameAvailable);

username.addEventListener("input", () => {
  if (username.validity.tooShort) {
    username.setCustomValidity("The username needs to be at least 8 characters long.");
  } if (username.validity.tooLong) {
    username.setCustomValidity("The username can not exceed 20 characters.");
  } else {
    username.setCustomValidity("");
  }
});

// Password re-entry field congruency check
const pw1 = document.getElementById("password");
const pw2 = document.getElementById("pwConfirm");

function checkCongruency(...fields) {
  let check;
  fields.forEach(element => {
    if (element.value === fields[0].value) {
      check = true;
    } else {
      check = false;
    }
  });
  console.log(check);
}

const debCheckCongruency = debounce(checkCongruency, 500);

pw1.addEventListener("input", () => {
  debCheckCongruency(pw1, pw2);
});
pw2.addEventListener("input", () => {
  debCheckCongruency(pw1, pw2);
});

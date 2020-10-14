// add js here
let form = document.querySelector("#signup-form");
let fullName = document.querySelector("#full-name");
let streetAddress = document.querySelector("#street-address");
let emailAdress = document.querySelector("#email-address");
let phoneNumber = document.querySelector("#phone-number");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let terms = document.querySelector("#terms");
let errorMessage = document.querySelector("#error-message");
let errorField = document.querySelector("#error-field");

function checkValidity(ev) {
  ev.preventDefault();
  if (!terms.checked) {
    return window.alert("Please agree to terms before continuing");
  }
  if (password.value.length < 10) {
    errorMessage.style.display = "block";
    errorMessage.innerText =
      "Your password is too short. Please create a password of minimum 10 characters";

    password.classList.add("error-field");
    pasword.focus();
  }
  if (password.value !== confirmPassword.value) {
    errorMessage.style.display = "block";
    errorMessage.innerText = "passwords do not match";

    confirmPassword.classList.add("error-field");
    confirmPassword.focus();
  } else {
    errorMessage.style.display = "none";
  }
}

form.addEventListener("submit", checkValidity);

import { removeSpaces, validateEmail, validatePhone } from "./utils.js";

/**
 *
 *          Form validation
 *
 */

$(".form").on("submit", function (event) {
  event.preventDefault();

  const email = $("#email").first().val();
  const message = $("#message").first().val();
  const name = $("#name").first().val();
  const phone = $("#phone").first().val();

  let nameTrim, emailTrim, phoneTrim, messageTrim;
  [nameTrim, messageTrim] = removeSpaces(name, message);

  let allValid = true;

  //check for empty string
  if (!name) {
    $(".valid-name").text("Not valid!").show().fadeOut(7000);
    allValid = false;
  } else {
    $(".valid-name").text("Validated...").show();
  }
  
  //email was already validated in the css. Here we do it again.
  if (!validateEmail(email)){
    $(".valid-email").text("Not valid!").show().fadeOut(7000);
    allValid = false;
  } else {
    $(".valid-email").text("Validated...").show();
  }

  //validate the phone number again
  if (!validatePhone(phone)) {
    $(".valid-phone").text("Not valid!").show().fadeOut(7000);
    allValid = false;
  } else {
    $(".valid-phone").text("Validates...").show();
  }

  if (!allValid) {
    event.preventDefault();
  } 
});

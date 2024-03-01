import {
  removeSpaces,
  validateName,
  validateEmail,
  validatePhone,
  validateMessage,
} from "./utils.js";

/**
 *
 *          Form validation
 *
 */

$(".form").on("submit", function (event) {
  const name = $("#name").first().val();
  const email = $("#email").first().val();
  const phone = $("#phone").first().val();
  const message = $("#message").first().val();

  let nameTrim, emailTrim, phoneTrim, messageTrim;
  [nameTrim, emailTrim, phoneTrim, messageTrim] = removeSpaces(
    name,
    email,
    phone,
    message
  );

  let allValid = true;

  if (validateName(nameTrim)) {
    $(".error-message-name").text("ok");
  } else {
    $(".error-message-name").text("Name is required field");
    allValid = false;
  }

  if (validateEmail(emailTrim)) {
    $(".error-message-email").text("ok");
  } else {
    if (!emailTrim) {
      $(".error-message-email").text("The email is required");
    } else {
      $(".error-message-email").text("Not valid");
    }
    allValid = false;
  }

  if (validatePhone(phoneTrim)) {
    $(".error-message-phone").text("ok");
  } else {
    if(phoneTrim){
      $(".error-message-phone").text("Format should match 111-222-333");
      allValid = false;
    }
  }

  if (validateMessage(messageTrim)) {
    $(".error-message-message").text("ok");
  } else {
    if (!messageTrim) {
      $(".error-message-message").text("Message is required");
    } else {
      $(".error-message-message").text("minimum 10 letters");
    }
    allValid = false;
  }

  if (!allValid) {
    event.preventDefault();
  } else {
    alert("Thanks for contacting us!")
  }
});

import { getCurrentURL } from "./utils.js";

/**
 * Load the navbar, footer and cta
 */
$(function () {
  //navbar is fixed in top of each page.
  $("#nav-container").load("./common/navbar.html", function () {
    //there is no need of the contact button here:
    if(window.location.pathname === '/contact.html') {
      $("#contact-button").remove();
    }
  });

  //the "Call To Action" is a form to get the email of the user.
  $(".cta").load("./common/cta.html");

  //footer
  $(".footer").load("./common/footer.html");
});

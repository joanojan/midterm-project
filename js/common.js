/**
 * Load the navbar, footer and cta
 */
$(function () {
  //navbar is fixed in top of each page.
  $("#nav-container").load("./common/navbar.html");

  //the "Call To Action" is a form to get the email of the user.
  $(".cta").load("./common/cta.html", function(){
    //handle the subscription...
  });

  //footer
  $(".footer").load("./common/footer.html");
});
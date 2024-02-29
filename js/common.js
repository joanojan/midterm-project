/**
 *  Load the navbar, footer and cta
 *
*/

$(function () {
  //navbar is fixed in top of each page ->
  $("#nav-container").load("./common/navbar.html", function () {
    // -> there is no need of the contact button here (the contact page)
    if(window.location.pathname === '/contact.html') {
      $("#contact-button").remove();
    }
    //mobile: show menu onclick.
    toggleMenu();
  });

  //the "Call To Action" is a form to get the email of the user.
  $(".cta").load("./common/cta.html");

  //footer
  $(".footer").load("./common/footer.html");
});

/**
 * 
 *        Toggle menu: show hamburguer menu on mobile and 
 *      display the links when the user clicks on it.
 * 
 */

function toggleMenu() {
  $("#toggle-btn").on("click", function(){
    $(".navbar-ul").toggle();
  })
}

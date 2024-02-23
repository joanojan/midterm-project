$(function(){
    //navbar
    $("#nav-container").load("./common/navbar.html");
    //footer
    $(".footer").load("./common/footer.html");
    //cta
    $(".cta").load("./common/cta.html");
    //other projects
    $(".projects").load("./common/projects.html", function () {
      $(".projects ul div").removeClass("icon-wrapper");
    });

    $(".project-section").css('background-color', 'red');
})
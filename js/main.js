$(function(){

    $("#nav-container").load("./common/navbar.html");

    $(".projects").first().load("./common/projects.html", function(){
      //TO-DO: CHANGE THE CONTENT OF THE PROJECT.HTML
    });

    $(".cta").load("./common/cta.html");

    $(".footer").load("./common/footer.html");

    //Services section
    $(".projects").last().load("./common/projects.html", function(){
      $(".services .projects-container .projects-title").text("Our Services");
      $("section.services ul li").removeClass(".project-li").addClass("services-li");
    });
    
  });

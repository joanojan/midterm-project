$(function () {
  //re-huse projects css for the services-section.
  $(".projects")
    .first()
    .load("./common/projects.html", function () {
      $(".projects ul div").removeClass("icon-wrapper");
    });

  //Services section diff: title, service-title, icons, description, css.
  $(".projects")
    .last()
    .load("./common/projects.html", function () {
      const titleElement = ".services .projects-container .projects-title";
      const imageElement = ".services ul li img";
      const liElement = ".services ul li";
      const serviceTitle = ".service-li .project-text .project-title";
      const serviceDescription = ".service-li .project-text .project-subject";
      $(titleElement).text("Our Services");
      $(imageElement).each(function (index) {
        $(this).attr("src", `../assets/services-section/icons/${index}.svg`);
        $(this).removeClass("project-img").addClass("service-img");
      });
      $(liElement).removeClass("project-li").addClass("service-li");
      $(liElement).css("background-color", "white");
      $(serviceTitle).each(function (index) {
        if (index === 0) $(this).text("User Interface Design");
        if (index === 1) $(this).text("User Experience Design");
        if (index === 2) $(this).text("Application Development");
      });
      $(serviceDescription).each(function (index) {
        if (index === 0)
          $(this).text(
            "Circle provides you with a stunning user interface design that is accessible to everyone."
          );
        if (index === 1)
          $(this).text(
            "Circle always focuses on delivering the best user experience to your customers."
          );
        if (index === 2)
          $(this).text(
            "We develop high-quality mobile and web applications using the latest technology stack."
          );
      });
      $(serviceDescription).css({
        width: "28rem",
        "margin-top": "3rem",
      });
    });
});

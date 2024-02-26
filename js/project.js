import { getProjects, errorCallback } from "./utils.js";

/**
 * load the project - and other projects
 */


//get and render the first project
getProjects().then(function (projects) {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    const projectOjbect = projects.filter(
      (project) => project.uuid === id
    );
    const project = projectOjbect[0];
    renderProject(project);
    console.log(project);
  } catch (error) {
    errorCallback(error);
  }
});

function renderProject(project) {
  const title = document.querySelector(".project-title");
  title.textContent = project.name;
  $(".project-article-subject").text(project.description);
  $(".project-dateTime").text(project.completed_on);
  $(".project-article-image").attr("src", project.image);
  $(".project-article-text").html(project.content);
}

//other projects
$(function () {
  $(".projects").load("./common/projects.html", function () {
    $(".projects ul div").removeClass("icon-wrapper");
    $(".projects-title").text("Other Projects");
    $(".projects-container img").each(function (index) {
      if (index === 0) $(this).attr("src", "./assets/projects-section/4.jpg");
      if (index === 1) $(this).attr("src", "./assets/projects-section/5.jpg");
      if (index === 2) $(this).attr("src", "./assets/projects-section/6.jpg");
    });
    $(".project-title").each(function (index) {
      if (index === 0) $(this).text("Orbit");
      if (index === 1) $(this).text("Purify");
      if (index === 2) $(this).text("CriptoPie");
    });
    $(".project-subject").each(function (index) {
      if (index === 0) $(this).text("UI Design");
      if (index === 1) $(this).text("UI/UX Design");
      if (index === 2) $(this).text("App Development");
    });
    $(".project-learn-more[href]").attr("href", "404.html");
  });
});
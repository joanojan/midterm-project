import { getProjects, errorCallback } from "./utils.js";

/**
 * load the project - and other projects
 */

//Render project filtered by id passed on the url
getProjects().then(function (projects) {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    const projectOjbect = projects.filter((project) => project.uuid === id);
    const project = projectOjbect[0];
    renderProject(project);
  } catch (error) {
    errorCallback(error);
  }
});

//render the project
function renderProject(project) {
  const title = document.querySelector(".project-project-title");
  title.textContent = project.name;
  $(".project-article-subject").text(project.description);
  $(".project-dateTime").text(project.completed_on);
  $(".project-article-image").attr("src", project.image);
  $(".project-article-text").html(project.content);
}

//other projects -> inject html
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
    $(".project-learn-more[href]").each(function (index) {
      $(this).attr("href", `project.html?id=${index}`);
    });
    //TO-DO: load other projects from the server,
    // now it's just a broken link.
    $(".project-learn-more[href]").attr('href','workInProgress.html');
  });
});

getProjects().then(function(projects){
  console.log(projects.reverse());
})



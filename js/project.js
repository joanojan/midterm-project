/**
 * load the project - and other projects
 */

$(function () {
  //other projects
  $(".projects").load("./common/projects.html", function () {
    $(".projects ul div").removeClass("icon-wrapper");
    $(".projects-title").text("Other Projects");
  });
});

import { getProjects, errorCallback } from "./utils.js";

//get and render the first project
getProjects().then(function (projects) {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    const firstProjectOjbect = projects.filter(
      (project) => project.uuid === id
    );
    const firstProject = firstProjectOjbect[0];
    renderProject(firstProject);
    console.log(firstProject);
  } catch (error) {
    errorCallback(error);
  }
});

function renderProject(project) {
  //using vanilla javascript
  const title = document.querySelector(".project-title");
  title.textContent = project.name;
  //or using jQuery
  $(".project-article-subject").text(project.description);
  $(".project-dateTime").text(project.completed_on);
  $(".project-article-image").attr("src", project.image);
  $(".project-article-text").html(project.content);
}

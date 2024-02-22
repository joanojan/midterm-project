onload = (event) => {
  async function getProjects() {
    const endpoint =
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";
    try {
      const res = await fetch(endpoint);
      const projects = await res.json();
      
      //get the title from the first project
      const firstProject = projects.filter((project) => project.uuid === '1');
      console.log(firstProject);
      console.log(projects[0].uuid);
    } catch (e) {
      console.error(e);
    }
  }
  getProjects();
};

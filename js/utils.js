/**
 * utils module
 */
const errorCallback = function (error) {
  console.error("Error: ", error);
};

async function getProjects() {
  const url =
    "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";
  try {
    const res = await fetch(url);
    const projects = await res.json();
    return projects;
  } catch {
    errorCallback(error);
  }
}

export { getProjects, errorCallback };

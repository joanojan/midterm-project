/**
 *          utils module
 *
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
  } catch (error) {
    errorCallback(error);
  }
}

function removeSpaces(...words) {
  return words.map((word) => word.trim());
}

function validateEmail(mail) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(mail)) return true;
  return false;
}

function validatePhone(phone) {
  const regex = /^[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
  if (regex.test(phone)) return true;
  return false;
}

export { getProjects, errorCallback, removeSpaces, validateEmail, validatePhone };
/**
 *          utils module
 */

const errorCallback = function (error) {
  console.error("Error: ", error);
};

//fetch the url, returns promise 
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

//simply check that the name is not empty
function validateName(name) {
  if (name) return true;
  return false;
}

function validateEmail (email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
};

function validatePhone(phone) {
  const regex = /^[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
  if (regex.test(phone)) return true;
  return false;
}

function validateMessage(message) {
  if (message.length < 10) return false;
  return true;
}

export { getProjects, errorCallback, removeSpaces, validateName, validateEmail, validatePhone, validateMessage };
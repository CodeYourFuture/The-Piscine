// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

// needed variables
import { getUserIDs } from "./common.mjs";

window.onload = function () {
  const users = getUserIDs();
  //document.querySelector("body").innerText = `There are ${users.length} users`;
  let userDropdown = document.getElementById('dropdown')
  populateDropdown(users, userDropdown)
};

function populateDropdown(users, userDropdown) {
  if (!userDropdown) return;
  
  users.forEach(userId => {
    const option = document.createElement('option');
    option.value = userId;
    option.textContent = `User ${userId}`;
    userDropdown.appendChild(option);
  });
}

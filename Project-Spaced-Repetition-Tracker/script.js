// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIds } from "./storage.js";
import { getData } from "./storage.js";
import { addData } from "./storage.js";
import { clearData } from "./storage.js";

//creating the dropdown for 5 users

const users = getUserIds();
function createDropDown(users) {
  let dropdownSelect = document.querySelector("#dropdown");
  for (let i = 0; i < users.length; i++) {
    let option = document.createElement("option");
    option.innerHTML = `User ${users[i]}`;
    dropdownSelect.appendChild(option);
  }
}

/////creating agenda when clicked on a user/////

document.querySelector("#dropdown").addEventListener("change", function () {
  const selectedUser = this.value.replace("User ", "").trim(); // Extract userId
  displayAgenda(selectedUser);
});

function displayAgenda(userId) {
  const agendaContainer = document.querySelector("#agenda");
  agendaContainer.innerHTML = ""; // Clear previous content

  const today = new Date();

  // Get the agenda for the selected user
  const agenda = getData(userId);

  if (!agenda || agenda.length === 0) {
    agendaContainer.innerHTML = "<p>No upcoming agenda for this user.</p>";
    return;
  }

  // Filter and sort agenda items
  const upcomingAgenda = agenda
    .filter((item) => new Date(item.date) >= today) // Remove past dates
    .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date

  if (upcomingAgenda.length === 0) {
    agendaContainer.innerHTML = "<p>No upcoming agenda for this user.</p>";
    return;
  }

  // Create a list of upcoming topics
  
  const ul = document.getElementById("agenda-list");
  upcomingAgenda.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.date} - ${item.topic}`;
    ul.appendChild(li);
  });

}

window.onload = function () {
  createDropDown(users);
  // document.querySelector("#user").innerText = `There are ${users.length} users`;
  console.log(getData(users[1]));
};

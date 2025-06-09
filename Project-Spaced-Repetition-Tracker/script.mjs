// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIDs } from "./common.mjs";
import { getSpacedRepetitionDates } from "./dateIntervals.mjs";

let agendaContainer;
window.onload = function () {
  const users = getUserIDs();
  //document.querySelector("body").innerText = `There are ${users.length} users`;
  const userDropdown = document.getElementById("dropdown");
  const userForm = document.getElementById("form");
  const topicInput = userForm["topicName"];
  const startingDateInput = userForm["startingDate"];
  agendaContainer = document.getElementById("agendas");

  //calling function to populate the user dropdown with available users whe page loads
  populateDropdown(users, userDropdown);

  //eventlistener for when a user is selected/changed
  userDropdown.addEventListener("change", (e) => {
    refreshAgendaDisplay(e.target.value);
  });

  //eventlistener to handle the submit of the form
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const topic = topicInput.value.trim();
    const date = startingDateInput.value;
    const selectedUserId = userDropdown.value;

    const newEntry = {
      userId: selectedUserId,
      topic: topic,
      date: date,
    };

    addData(selectedUserId, [newEntry]);
    //clears input fields after submission
    topicInput.value = "";
    startingDateInput.value = "";

    refreshAgendaDisplay(selectedUserId);
  });
};

// fetches displays data for selected user
function refreshAgendaDisplay(userId) {
  const userData = getData(userId) || [];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let expandedData = [];

  userData.forEach(({ topic, date: startDate }) => {
    const spacedDates = getSpacedRepetitionDates(startDate)
    .map(dte => new Date(dte))
    .filter(dte => dte >= today);

    spacedDates.forEach(dte => {
      expandedData.push({
        topic, date: dte.toISOString().slice(0, 10)
      });
    });
  });

  expandedData.sort((a, b) => new Date(a.date) - new Date(b.date));

  agendaContainer.textContent = "";
  renderAgenda(expandedData);

}
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDate();

  const daySuffix = (d) => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day}${daySuffix(day)} ${month} ${year}`;
}

//populates dropdown with users
function populateDropdown(users, userDropdown) {
  if (!userDropdown) return;
  users.forEach((userId) => {
    const option = document.createElement("option");
    option.value = userId;
    option.textContent = `User ${userId}`;
    userDropdown.appendChild(option);
  });
}

//This function displays the agendas for the selected user. This function will run only when a user is selected
function renderAgenda(userData) {
  if (userData.length === 0) {
    agendaContainer.textContent = `No agendas for this user.`;
    return;
  }

  const agendaList = document.createElement("ul");
  userData.forEach(({ topic, date }) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${topic}, ${formatDate(date)}`; // format date here
    agendaList.appendChild(listItem);
  });

  agendaContainer.appendChild(agendaList);
}
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
  const userDropdown = document.getElementById('dropdown')
  const userForm = document.getElementById('form')
  const topicInput = userForm['topicName']
  const startingDateInput = userForm['startingDate']
  agendaContainer = document.getElementById("agendas")

  //calling function to populate the user dropdown with available users whe page loads
  populateDropdown(users, userDropdown)

  //eventlistener for when a user is selected/changed
  userDropdown.addEventListener('change', (e) => {
    refreshAgendaDisplay(e.target.value)
  })

  //eventlistener to handle the submit of the form
  userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const topic = topicInput.value.trim();
    const date = startingDateInput.value;
    const selectedUserId = userDropdown.value

    const newEntry = {
      userId: selectedUserId,
      topic: topic,
        date: date
    };

    
    addData(selectedUserId,[newEntry])
    //clears input fields after submission
    topicInput.value = "";
    startingDateInput.value = "";

    refreshAgendaDisplay(selectedUserId)

  })
};

// fetches displays data for selected user
function refreshAgendaDisplay(userId) {
  const userData = getData(userId) || [];
  agendaContainer.textContent = "";
  renderAgenda(userData)
}

//populates dropdown with users
function populateDropdown(users, userDropdown) {
  if (!userDropdown) return;
  users.forEach(userId => {
    const option = document.createElement('option');
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

  let agendaList = document.createElement("ol")
  userData.forEach(user => {
    let listItem = document.createElement("li")
    let topicHeading = document.createElement('h3')
    topicHeading.textContent = user.topic

    let dateParagraph = document.createElement('p')
    dateParagraph.textContent = `Starting date : ${user.date}`

    
    //listItem.textContent = `${user.topic} start date:${user.date}`
    listItem.append(topicHeading, dateParagraph)
    agendaList.appendChild(listItem)
  });
  
  agendaContainer.appendChild(agendaList)
  
 
}


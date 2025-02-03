// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIds } from "./storage.js";
import { getData } from "./storage.js";
import { addData } from "./storage.js";
import { clearData } from "./storage.js";

let formInput = document.querySelector("#form-input");
formInput.style.display = "none"; // Hide form

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



function displayAgendas(userId, gettingData1) {
  let ulAgendas = document.querySelector("#agenda");
  ulAgendas.innerHTML = ""; // Clear previous content

  if (!gettingData1 || gettingData1.length === 0) {
    ulAgendas.innerHTML = "<p>No upcoming agenda for this user.</p>";
  }
  // Sort the gettingData array by date
  let gettingData = gettingData1.sort((a, b) => {
    // Convert date strings into Date objects for comparison
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);

    // Sort in ascending order: Date A comes before Date B
    return dateA - dateB;  // If dateA < dateB, result is negative, meaning a comes first
  });
  // Create a list of upcoming topics
  
  for(let i of gettingData){
    let liElement = document.createElement("li");
    liElement.innerHTML = `${i.topic}, ${formatDate(userId, i.date)}`
    ulAgendas.appendChild(liElement);
  }

}


function formatDate(userId, date){
  let dateArr = date.split("-");
  let day = (dateArr[2] == "01" || dateArr[2] == "21" || dateArr[2] == "31") 
  ? `${dateArr[2]}st`
  : (dateArr[2] == "02" || dateArr[2] == "22") 
  ? `${dateArr[2]}nd`
  : (dateArr[2] == "03" || dateArr[2] == "23") 
  ? `${dateArr[2]}rd`
  : `${dateArr[2]}th`;

  let month = (dateArr[1] == "01") ? "January" : (dateArr[1] == "02") ? "February" : (dateArr[1] == "03") ? "March"
  : (dateArr[1] == "04") ? "April" : (dateArr[1] == "05") ? "May" : (dateArr[1] == "06") ? "June" : (dateArr[1] == "07") ? "July"
  : (dateArr[1] == "08") ? "August" : (dateArr[1] == "09") ? "September" : (dateArr[1] == "10") ? "October"
  : (dateArr[1] == "11") ? "November" : "December"; 

  let year = dateArr[0];
  if(userId == 3){
    let today = new Date();
    let currentMonth = today.getMonth() + 1;  // Add 1 to get the month as 1-based index
    let futureMonth = Number(dateArr[1]);
    let result = futureMonth - currentMonth;

    return `${result} months in the future (the same day of the month as today)`;
  }
  else{
    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
  }
  
}

window.onload = function () {
  createDropDown(users);
  // document.querySelector("#user").innerText = `There are ${users.length} users`;
  console.log(getData(users[1]));
};

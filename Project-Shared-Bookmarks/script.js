// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIds, setData, getData } from "./storage.js";

/* This function will add a new bookmark to the user into the database */
export function addUserBookmark(userId, title, desc, url) {
  var userData = getData(userId);
  if(userData == null) userData = [];
  var newData = {
    "title": title,
    "description": desc,
    "url": url,
    "timestamp": new Date()
  }
  userData.unshift(newData); // Adds the new dictionary object at the first index (or the start)
  setData(userId, userData);
  return getData(userId);
}

export function showUserBookmarks(value) {
  var userData = getData(value);
  var tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  if(userData == null) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.colSpan = 3;
    td.style = "text-align:center";
    td.textContent = "No bookmarks found";
    tr.appendChild(td);
    tbody.appendChild(tr);
    return;
  }
  var tbody = document.getElementById("table-body");
  tbody.innerHTML = "";
  userData.forEach(function(data) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = `<a href="${data.url}" target="_blank">${data.title}</a>`;
    tr.appendChild(td);
    let td2 = document.createElement("td");
    td2.textContent = data.description;
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    var date = new Date(data.timestamp);
    td3.textContent = date.toLocaleString('en-GB');
    tr.appendChild(td3);
    tbody.appendChild(tr);
  });
  return userData;
}

window.onload = function () {
  const users = getUserIds();
  var userSelect = document.getElementById("select-user");
  var bookmarkForm = document.getElementById("form-bookmark");

  /* Load user drop-down */
  users.forEach(function(element) {
    var option = document.createElement("option");
    option.textContent = "User " + element;
    option.value = element;
    userSelect.append(option);
  });
  userSelect.selectedIndex = 0;
  showUserBookmarks(userSelect.value);
  userSelect.addEventListener("change", (event) => showUserBookmarks(userSelect.value));

  /* Form listeners */
  bookmarkForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if(userSelect.value == -1) {
      alert("Please select a valid user from the drop-down");
    } else {
      var title = document.getElementById("title");
      var description = document.getElementById("description");
      var url = document.getElementById("url");

      addUserBookmark(userSelect.value, title.value, description.value, url.value);
      title.value = "";
      description.value = "";
      url.value = "";

      showUserBookmarks(userSelect.value);
    }
  });
  bookmarkForm.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();  
        document.getElementById("btn-submit").click();
    }
  });
};

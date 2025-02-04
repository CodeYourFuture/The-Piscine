// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIds, getData, addData } from "./storage.js";

window.onload = function () {
  const userSelect = document.getElementById("user-select")
  const users = getUserIds();
  console.log(users, "users")
  //document.querySelector("body").innerText = `There are ${users.length} users`;

  users.forEach(userId => {
   const option = document.createElement("option");
   option.value = userId;
   option.textContent = `user ${userId}`
  userSelect.append(option)
  })
}



// getUserIds() .. done
//when called, returns an array of strings, each of which is a user id

// getData(userId)
//when called with a user id string as an argument, returns an array of objects, 
//each of which represents an agenda item for the user

// addData(userId, data)
//when called with a user id string and an array of objects as arguments, it will append the agenda items data to the user’s stored agenda. Each of the objects should contain information about the agenda item, such as the date and topic that should be revised on that date. The function does not return anything

//clearData(userId)
// when called with a user id string as an argument, 
//it will clear any stored data associated with the user id. 
//This is provided to help with development, and is not required in the final code

// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIds } from "./storage.js";
import { getData } from "./storage.js";
import { addData } from "./storage.js";
import { clearData } from "./storage.js";

const users = getUserIds();
function createDropDown(users){
  let dropdownSelect = document.querySelector("#dropdown");
  dropdownSelect.addEventListener("click", ()=>{
    for(let i = 0; i < users.length; i++){
      let option = document.createElement("option");
      option.innerHTML = `User ${users[i]}`;
      dropdownSelect.appendChild(option);
    }
  })
}


window.onload = function () {
  createDropDown(users);
  // document.querySelector("#user").innerText = `There are ${users.length} users`;
  console.log(getData(users[1]));
};

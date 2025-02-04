// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIds } from "./storage.js";



const userSelect = document.createElement("select");
const userIds = getUserIds();
console.log(userIds);

userIds.forEach(item => {
  const option = document.createElement("option");
  option.value = item;
  option.textContent = `user ${item}`;
  userSelect.appendChild(option);
});

document.body.appendChild(userSelect);

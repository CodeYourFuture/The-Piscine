// This is a placeholder file which shows how you can access JSON data defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getDictionarySize } from "./common.mjs";

window.onload = function () {
    const body = document.querySelector("body")
    body.innerText = `There are ${getDictionarySize()} words in the Basic English dictionary`;
    const textSection = document.createElement("section");
    body.append(textSection);
    const subTitle = document.createElement("h2");
    subTitle.textContent = "Check your text";
    textSection.append(subTitle);
    const text = document.createElement("textarea"); 
    text.id = "text-field"
    text.placeholder = "Put you text here if you want to check it";
    textSection.append(text);
    const checkBtn = document.createElement("button");
    checkBtn.classList.add = "check-btn"
    checkBtn.textContent = "check";
    textSection.append(checkBtn);
    

    checkBtn.addEventListener("click", () => {
        const checkingText = text.value;
        spellChecking(checkingText)
    })


}

function spellChecking(text) {
    splitTheText(text);
    
}
export function splitTheText(text) {
    const arrayOfWords = text.trim.split(/\s+/)
    return arrayOfWords;
}


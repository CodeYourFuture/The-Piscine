// This is a placeholder file which shows how you can access JSON data defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getDictionarySize, checkWordsInDictionary } from "./common.mjs";

window.onload = function () {
    const body = document.querySelector("body")
    body.innerText = `There are ${getDictionarySize()} words in the Basic English dictionary`;
    const textSection = document.createElement("section");
    body.append(textSection);
    const subTitle = document.createElement("h2");
    subTitle.textContent = "Check your text";
    textSection.append(subTitle);
    const textarea = document.createElement("textarea"); 
    textarea.id = "text-field"
    textarea.placeholder = "Put you text here if you want to check it";
    textSection.append(textarea);
    const button = document.createElement("button");
    button.classList.add = "check"
    button.textContent = "check";
    textSection.append(button);
    

    button.addEventListener("click", () => {

        const wordsArray = splitTheText(textarea.value);
        const checkedWords = checkWordsInDictionary(wordsArray);
        console.log(checkedWords)
    })


}

function spellChecking(text) {
    splitTheText(text);
    
}
export function splitTheText(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .trim()
        .split(/\s+/);
}
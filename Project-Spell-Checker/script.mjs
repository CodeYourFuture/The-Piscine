// This is a placeholder file which shows how you can access JSON data defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getDictionarySize, checkWordsInDictionary, addWordToDictionary } from "./common.mjs";

window.onload = function () {
    const body = document.querySelector("body")
    body.innerText = `There are ${getDictionarySize()} words in the Basic English dictionary`;
    const section = document.createElement("section");
    body.append(section);
    const label = document.createElement("label");
    label.htmlFor = "text-input";
    label.textContent = "Enter text to check:";
    section.append(label);

    const subTitle = document.createElement("h2");
    subTitle.textContent = "Check your text";
    section.append(subTitle);
    const textarea = document.createElement("textarea"); 
    textarea.id = "text-field"
    textarea.rows = 6;
    textarea.cols = 50; 
    textarea.placeholder = "Put you text here if you want to check it";
    section.append(textarea);
    const button = document.createElement("button");
    button.classList.add = "check"
    button.textContent = "check";
    section.append(button);
    const resultDiv = document.createElement("div");
    section.append(resultDiv);
    
    textarea.addEventListener("input", () => {
        resultDiv.innerHTML = "";
    });

    

    button.addEventListener("click", () => {

        const wordsArray = splitTheText(textarea.value);
        const checkedWords = checkWordsInDictionary(wordsArray);
        renderResult(checkedWords,resultDiv)
    })


}

function renderResult(checkedWords, container) {
    container.innerHTML = "";

    checkedWords.forEach(item => {
        const span = document.createElement("span");
        span.textContent = item.word + " ";

        if (!item.isCorrect) {
            span.style.textDecoration = "underline";
            span.style.textDecorationColor = "red";
            const addButton = document.createElement("button")
            addButton.textContent = "add to dictionary";
            addButton.addEventListener("click", () => {
                addWordToDictionary(item.word);
                span.style.textDecoration = "none";
                addButton.remove();
            })
            span.append(addButton);
        }

        container.append(span);
    });
}

export function splitTheText(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .trim()
        .split(/\s+/);
}
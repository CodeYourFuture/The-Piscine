# Project: Spell Checker

When writing text, it is helpful to have a tool to check that you are spelling correctly. Most computers even have it built in to the operating system.

Your task is to build your own spell checker for a simplified language called ["Basic English"](https://en.wikipedia.org/wiki/Basic_English) that contains a much smaller set of words than regular English. Use the list provided in `words.json`.

Make a website where a user can write some text and then check if the text is valid Basic English. You must **focus on HTML and JavaScript**. Some CSS can be used, but the website's design **is not the focus of the assessment**. We will assess you on correct logic. You will not pass if you produce a pretty UI that has missing or incorrect logic.

## Requirements

You must submit both a link to your GitHub repo, and a link to the deployed website.

Your website must be hosted on the internet, and must be automatically deployed when you merge changes to your GitHub repo.

You must be able to explain every line of code in your project.

Your website should display a text input, which allows the user to a few sentences of text. Your website should also have some way of triggering a spell check on the text that the user has written.

When the spell check is triggered, your website should check every word that the user has typed to see if it exists in the Basic English word list that we have provided (in `words.json`).

If there are any words that aren't in the Basic English word list, you should consider those words as a spelling mistake. All spelling mistakes should be presented to the user underneath the input, along with a message explaining that the words are misspelled. This message should be styled with highlighting in some way that makes it obvious that there is a spelling mistake. **Note**: highlighting the word within the input itself is quite difficult, so don't attempt it as part of the assessment.

If all words are correct, then no message needs to be displayed underneath the input.

If a misspelled word is detected, there should be a way for the user to add that word to the dictionary. The spell check should then be triggered again, and the word that was added to the dictionary should no longer be considered a misspelled word (so should _not_ be highlighted). **Note**: the custom dictionary does _not_ need to be saved, so reloading the page can reset back to the initial dictionary.

When the user changes the text in the input, the warning about misspelled words should be cleared.

The input text can sometimes include punctuation (such as commas or full stops). Your website should not identify words that include some punctuation as spelling mistakes. So for example, "make a cake, please" will not highlight "cake" as a spelling mistake. However, if a word that is not in the Basic English word list and is next to some punctuation (e.g. "cakez,"), it still should be highlighted as a spelling mistake.

A hyphen (`-`) can join two words, which should be treated as separate. For example "blue-green" should _not_ be highlighted as both "blue" and "green" are found in the Basic English dictionary. However, the first word in "feisty-cat" should be highlighted because "feisty" is not in the Basic English dictionary.

Words that begin with capital letters, such as proper nouns and names, should always be treated as "correct" words and so should _not_ be highlighted. For example, "Ali" or "London" would not be highlighted, despite not being in the Basic English dictionary.

Your GitHub repository must contain unit tests which demonstrate that your code works. End to end tests are optional.

## Supplied scaffolding

We have supplied a few sample files in the repo to demonstrate how you can define JSON data in one file and access this both from another file. Feel free to use these files in your solution if you want, or to just use them for inspiration for your own solution.

Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server - you can't open the `index.html` file using a `file://` URL.

## Rubric

All of the below requirements must be met for the project to be considered complete:

- The website has an input that allows the user to write some text
- The website has a way for the user to triggering a spell check
- When triggered, the spell check should check every word in the input to see if it exists in the Basic English dictionary
- If a word does not exist in the dictionary, then it should be highlighted below the input as a spelling mistake
- It should be obvious to the user that there is a spelling mistake, both with visuals and some explanatory text
- If a word does not exist in the dictionary, then a mechanism should exist to add the word to the dictionary. Adding the word to the dictionary should re-trigger the spell check and the newly added word should no longer be highlighted
- "Correct" words (i.e. those found in the Basic English dictionary) that are adjacent to punctuation (which is defined as the following characters: `,.?!":;`) should not be marked as spelling mistakes
- "Incorrect" words (i.e. those not found in the Basic English dictionary) that are adjacent to punctuation characters should still be marked as spelling mistakes
- Words joined by hyphen should be treated separately, so if one or both of the words are "incorrect" (i.e. those not found in the Basic English dictionary) then it should be marked as a spelling mistake
- The website must score 100 for accessibility in Lighthouse
- Unit tests must be written for at least one non-trivial function

Some examples of correct Basic English:

- `he go to the island`
- `they make a fire`
- `he is married, she is not`
- `fire is red-orange`
- `I love Glasgow`

Some examples of incorrect Basic English:

- `hello world`
- `they create some dinner`
- `she give gift, then go out`
- `he like egg-nog`
- `where is birmingham`

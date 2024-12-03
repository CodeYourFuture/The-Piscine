# Project: Spell Checker

When writing text, it is helpful to have a tool to check that you are spelling correctly. Most computers even have it built in to the operating system.

Your task will be to build your own spell checker for a simplified language called ["Basic English"](https://en.wikipedia.org/wiki/Basic_English) that contains a much smaller set of words than regular English. A list of all around 850 words has been provided for you in `words.json`, so that you can easily import the list of words.

Make a website where a user can write some text and then check if the text is valid Basic English. You must **focus on HTML and JavaScript**. Some CSS can be used, but the website's design **is not the focus of the assessment**. We will assess you on correct logic, not on a pretty UI that is incomplete.

## Requirements

You must submit both a link to your GitHub repo, and a link to the deployed website.

Your website must be hosted on the internet, and must be automatically deployed when you merge changes to your GitHub repo.

You must be able to explain every line of code in your project.

Your website should display an input, which allows the user to write some text. Your website should also have some way of triggering a spell check on the text that the user has written.

When the spell check is triggered, your website should check every word that the user has typed to see if it exists in the Basic English word list that we have provided (in `words.json`).

If there are any words that aren't in the Basic English word list, you should consider those words as a spelling mistake. All spelling mistakes should be presented to the user underneath the input, along with some text explaining that the words are misspelled. They should be highlighted in some way that makes it obvious that there is a spelling mistake.

When the user changes the text in the input, the warning about misspelled words should be cleared.

The input text can sometimes include punctuation (such as commas or full stops). Your website should not identify words that include some punctuation as spelling mistakes. So for example, "make a cake, please" will not highlight "cake" as a spelling mistake. However, if a word that is not in the Basic English word list and is next to some punctuation, it still should be highlighted as a spelling mistake.

## Rubric

All of the below requirements must be met for the project to be considered complete:

- The website has an input that allows the user to write some text
- The website has a way for the user to triggering a spell check
- When triggered, the spell check should check every word in the input to see if it exists in the Basic English word list
- If the word does not exist in the word list, then it should be highlighted below the input as a spelling mistake
- It should be obvious to the user that there is a spelling mistake, both with visuals and some explanatory text
- "Correct" words (i.e. those found in the Basic English word list) that are adjacent to punctuation (which is defined as the following characters: `,.?!":;`) should not be marked as spelling mistakes
- "Incorrect" words (i.e. those not found in the Basic English word list) that are adjacent to punctuation characters should still be marked as spelling mistakes

Some examples of correct Basic English:

- `he go to the island`
- `they make a fire`
- `he is married, she is not`

Some examples of incorrect Basic English:

- `hello world`
- `they create some dinner`
- `she give gift, then go out`

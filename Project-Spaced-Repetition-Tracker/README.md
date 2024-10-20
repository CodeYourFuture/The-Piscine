# Project: Spaced Repetition Tracker

At Code Your Future, we like to use a learning technique called spaced repetition. The technique involves reviewing a topic over increasing time gaps (e.g. after one week, one month, three months, six months, one year).

One of the difficulties of this approach is tracking which topic should be revised at what time. Your task is to write code which allows a user to track topics and show when they should revise these topics.

You should make a frontend, which displays an agenda of topics to revise on specific dates. You should use **HTML and JavaScript only**. You should **not** use CSS. We want to focus on your ability to create the correct logic and not spend time on creating the perfect UI.

TODO: Generate and link to storage.js

`storage.js` is a file containing four functions:

- `getUserIds()`: when called, returns an array of strings, each of which is a user id
- `getData(userId)`: when called, returns an array of objects, each of which contains information about a date and a topic that should be revised on that date. The agenda items are sorted by date, newest to oldest
- `setData(userId, data)`: when called with a user id string and an array of objects as arguments, it will store the data for the user. Each of objects should contain information about a date and a topic that should be revised on that date
- `clearData(userId)`: when called with a user id string as an argument, it will clear any stored data associated with the user id. This is provided to help with development, and is not required in the final code

## Requirements

You must submit both a link to your GitHub repo, and a link to the deployed website.

Your website must be hosted on the internet, and must be automatically deployed when you merge changes to your GitHub repo.

Your website must include a drop-down to select a user to display information for. When a user is selected, you must display the agenda for that user. If there is no agenda for the user, you should present a message explaining this.

You **must not** implement any kind of authentication. Just a drop-down to choose which user’s information to display. You **must not** implement data storage yourself, as we have provided that for you.

After picking a user, your website should display the list of topics to revise in chronological order. For each revision date, it should display the date and the name of the topic to revise. Revision dates in the past should not be displayed.

Your website must include a form with a text input, a date picker and submit button that allows a user to add a new topic. This form must be accessible, so for example, hitting the Enter key will also submit the topic name, the same as clicking the submit button.

The date picker should default to today’s date, but allow selection of another date. You should use the built-in date picker for browsers, unless attempted as a bonus task. **No credit** is given for using an alternative date picker.

When the form is submitted, your website should calculate the date to revise for one week, one month, three months, six months and one year from the selected date. Using these calculations, your website should store the topic name and any necessary revision date data using the functions from storage.js as described above.

After the new data has been stored, the updated agenda must be displayed (including the new topic) for the relevant user.

Your GitHub repository must contain unit tests which demonstrate that your code works. End to end tests are optional.

## Rubric

All of the below requirements must be met for the project to be considered complete:

- The website must contain a drop-down which lists two users
- Selecting a user must display the agenda for the relevant user (see manual testing below)
- If there is no agenda for the selected user, a message is displayed to explain this
- The website must contain a form with inputs for a topic name and a date picker. The form should also have a submit button.
- The date picker must default to today’s date
- Submitting the form adds a new topic to revise for the relevant user only. The topic’s dates to revise are calculated as one week, one month, three months, six months and one year from the selected date (see manual testing below)
- After creating a new topic to revise, the agenda for the current user is shown, including the new topic
- The website must score 100 for accessibility in Lighthouse
- Unit tests must be written for at least one non-trivial function

Below are some manual testing steps and expected results, which will be run on all websites to fairly assess them.

Steps:

1. Select User 1 from the drop-down
1. Add “Functions in JS” to the text input
1. Select the date 19th July 2024 from the date picker
1. Submit the form

Expected result:

- The agenda for User 1 is shown, with the revision dates shown as follows:
  - Functions in JS, 26th July 2024
  - Functions in JS, 19th August 2024
  - Functions in JS, 19th October 2024
  - Functions in JS, 19th January 2025
  - Functions in JS, 19th July 2025
- Each of the revision dates show the topic name and the relevant date (styling/formatting does not matter as long as it is understandable)
- The form remains on the website (allowing for further topics to be added)

Steps:

1. Select User 2 from the drop-down
1. Add “Variables in Python” to the text input
1. Select the date 5th November 2024 from the date picker
1. Submit the form
1. Add “Functions in Python” to the text input
1. Select the date 5th October 2024 from the date picker
1. Submit the form

Expected result:

- The agenda for User 2 is shown, with the revision dates shown as follows:
  - Functions in Python, 12th October 2024
  - Functions in Python, 5th November 2024
  - Variables in Python, 12th November 2024
  - Variables in Python, 5th December 2024
  - Functions in Python, 5th January 2025
  - Variables in Python, 5th February 2025
  - Functions in Python, 5th April 2025
  - Variables in Python, 5th May 2025
  - Functions in Python, 5th October 2025
  - Variables in Python, 5th November 2025
  - Each of the revision dates show the topic name and the relevant date (styling/formatting does not matter as long as it is understandable)
- The form remains on the website (allowing for further topics to be added)

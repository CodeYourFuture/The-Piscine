import "@testing-library/jest-dom"; // Enable custom matchers
import { fireEvent, screen } from "@testing-library/dom";

// Mock storage.js BEFORE importing script.js
jest.mock("./storage.js", () => ({
  getUserIds: jest.fn().mockReturnValue(["1", "2", "3", "4", "5"]),
  getData: jest.fn(),
}));

import { createDropDown, hideForm, setTodayDate, displayAgendas } from "./script.js";
import { getUserIds, getData } from "./storage.js";

/**
 * @jest-environment jsdom
 * Test: Dropdown creation and form hiding
 */
test("create dropdown and hide form input", () => {
  document.body.innerHTML = `
    <input type="text" id="form-input">
    <select id="dropdown"></select>
  `;

  hideForm();
  const formInput = document.querySelector("#form-input");
  expect(formInput.style.display).toBe("none"); // Initially hidden

  createDropDown(getUserIds());

  const dropdown = document.querySelector("#dropdown");
  expect(dropdown.children.length).toBe(5); // Ensure 5 users are added
});

/**
 * @jest-environment jsdom
 * Test: Date Picker Defaults to Today's Date
 */
describe("Date Picker Default Value", () => {
  beforeEach(() => {
    document.body.innerHTML = `<input type="date" id="date-form">`;
  });

  test("Date picker should default to today's date on page load", () => {
    setTodayDate(); // Call function to set today's date
    const dateInput = document.querySelector("#date-form");
    const today = new Date().toISOString().split("T")[0];

    expect(dateInput.value).toBe(today);
  });
});

/**
 * @jest-environment jsdom
 * Test: Form Structure
 */
describe("Form Structure", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="form-input">
        <input type="text" id="topic-form" placeholder="Enter topic">
        <input type="date" id="date-form">
        <button id="form-button" type="submit">Submit</button>
      </form>
    `;
  });

  test("The form should contain a topic input, date picker, and submit button", () => {
    const form = document.querySelector("#form-input");
    const topicInput = document.querySelector("#topic-form");
    const dateInput = document.querySelector("#date-form");
    const submitButton = document.querySelector("#form-button");

    expect(form).not.toBeNull();
    expect(topicInput).not.toBeNull();
    expect(topicInput.type).toBe("text");
    expect(dateInput).not.toBeNull();
    expect(dateInput.type).toBe("date");
    expect(submitButton).not.toBeNull();
    expect(submitButton.type).toBe("submit");
  });
});


// script.js
import { getUserIds, getData, addData, clearData } from "./storage.js";

window.onload = function() {
    const userSelect = document.getElementById("user-select");
    const agendaDiv = document.getElementById("agenda");
    const topicForm = document.getElementById("topic-form");
    const clearBtn = document.getElementById("clear-btn");

    // Populate user dropdown
    getUserIds().forEach(userId => {
        const option = document.createElement("option");
        option.value = userId;
        option.textContent = `User ${userId}`;
        userSelect.appendChild(option);
    });

    // Display agenda items for selected user
    function showAgenda() {
        const userId = userSelect.value;
        const agendaItems = getData(userId);
        
        agendaDiv.innerHTML = agendaItems 
            ? `<h3>User ${userId}'s Agenda:</h3>
               <ul>${agendaItems.map(item => `<li>${item.topic} - ${item.date}</li>`).join('')}</ul>`
            : "<p>No agenda items found for this user</p>";
    }

    // Initial agenda display
    showAgenda();

    // Event listeners
    userSelect.addEventListener('change', showAgenda);
    
    topicForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newTopic = {
            topic: document.getElementById("topic-name").value,
            date: document.getElementById("topic-date").value
        };
        addData(userSelect.value, [newTopic]);
        showAgenda();
        this.reset();
    });

    clearBtn.addEventListener('click', function() {
        if(confirm("Are you sure you want to clear all data for this user?")) {
            clearData(userSelect.value);
            showAgenda();
        }
    });
};


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

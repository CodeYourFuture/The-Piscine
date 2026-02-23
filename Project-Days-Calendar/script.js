const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const root = document.querySelector(".week-section");

const currentDate = new Date();
const currentDay = currentDate.getDay();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();



renderCalendar(currentMonth, currentYear);

function renderCalendar(month, year) {
    root.innerHTML = "";
    for (let i = 0; i < daysOfTheWeek.length; i++) {
        const dayOfTheWeek = document.createElement("div");
        const header = document.createElement("h5");
        header.textContent = daysOfTheWeek[i];        
        root.appendChild(dayOfTheWeek);
        dayOfTheWeek.appendChild(header);
    }        
    const firstDayIndex = new Date(year, month, 1).getDay();    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 0; i < firstDayIndex; i++) {
        const emptyCell = document.createElement("div");     
        root.appendChild(emptyCell)
    }
    for (let day = 1; day <= daysInMonth; day++) {
        renderDay(day);
    }
}

function renderDay(dayNumber) {
    const dayCard = document.createElement("button");
    dayCard.classList.add("days");
    dayCard.textContent = dayNumber;
    root.appendChild(dayCard);
}
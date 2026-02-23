const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const root = document.querySelector(".week-section");

const currentDate = new Date();
const currentDay = currentDate.getDay();
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();


renderMonth(currentMonth)
renderCalendar(currentMonth, currentYear);

function renderCalendar(month, year) {
    root.innerHTML = "";
    document.querySelector("h1").textContent = months[month];

    for (let i = 0; i < daysOfTheWeek.length; i++) {
        const dayOfTheWeek = document.createElement("div");
        const header = document.createElement("h5");
        header.classList.add("dayOfTheWeek")
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
        const dayCard = renderDay(day); 
        if (day === currentDate.getDate() && year === currentDate.getFullYear() && month === currentDate.getMonth()) {
            dayCard.classList.add("today");
        }
        root.appendChild(dayCard);
    }
}

function renderDay(dayNumber) {
    const dayCard = document.createElement("button");
    dayCard.classList.add("days");
    dayCard.textContent = dayNumber;
    root.appendChild(dayCard);
    return dayCard;
}
function renderMonth(month) {
    const shownMonth = document.querySelector("h1");
    shownMonth.textContent = months[month];
}



const nextBtn = document.querySelector(".next-month");
nextBtn.addEventListener("click", () => {
        currentMonth++;

    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    renderCalendar(currentMonth, currentYear);
});

const previousMonth = document.querySelector(".previous-month");
previousMonth.addEventListener("click", () => {
    currentMonth--;

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }

    renderCalendar(currentMonth, currentYear);
});

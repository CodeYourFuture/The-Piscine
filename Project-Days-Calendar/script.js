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
const currentYear = new Date().getFullYear();


renderMonth(currentMonth)
renderYear(currentYear)
renderCalendar(currentMonth, currentYear);


export function createEvent({ title, date }) {
  return {
    id: crypto.randomUUID(),
    title: title.trim(),
    date, // "YYYY-MM-DD"
    allDay: true,
    createdAt: new Date().toISOString()
  };
}

export function saveEvent(event) {
  const events = JSON.parse(localStorage.getItem("calendarEvents")) || [];
  events.push(event);
  localStorage.setItem("calendarEvents", JSON.stringify(events));
}

export function getAllEvents() {
  return JSON.parse(localStorage.getItem("calendarEvents")) || [];
}

export function renderCalendar(month, year) {
    root.innerHTML = "";
    document.querySelector("h1").textContent = months[month];

    for (let i = 0; i < daysOfTheWeek.length; i++) {
        const dayOfTheWeek = document.createElement("div");
        const header = document.createElement("h2");
        header.classList.add("dayOfTheWeek")
        header.textContent = daysOfTheWeek[i];        
        root.appendChild(dayOfTheWeek);
        dayOfTheWeek.appendChild(header);
    }        
    const firstDayIndex = new Date(year, month, 1).getDay();    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = firstDayIndex; i > 0; i--) {
        const dayDiv = document.createElement("div");  
        dayDiv.textContent = prevMonthLastDay - i + 1;
        dayDiv.classList.add('fade')
        root.appendChild(dayDiv)
    }
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCard = renderDay(day); 
        if (day == currentDate.getDate() && year == currentDate.getFullYear() && month == currentDate.getMonth()) {
            dayCard.classList.add("today");
        }
        root.appendChild(dayCard);
    }

    const nextMonthStartDay = 7 - new Date(year, month + 1, 0).getDay();
    for (let i = 1; i < nextMonthStartDay; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.textContent = i;
        dayDiv.classList.add('fade')
        root.appendChild(dayDiv)  

    }
}

export function renderDay(dayNumber) {
    const dayCard = document.createElement("button");
    dayCard.classList.add("days");
    dayCard.textContent = dayNumber;
    dayCard.addEventListener("click", () => {
        const selectedYear = document.querySelector("#year-selector").value;
        const selectedDate = new Date(selectedYear, currentMonth, dayNumber);

        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
        const day = String(selectedDate.getDate()).padStart(2, "0");
        
        const isoDate = `${year}-${month}-${day}`;
        if (title) {
            const event = createEvent({
                title,
                date: isoDate
            });
            saveEvent(event);
            alert(`Event saved for ${isoDate}`);
        }
        
        
    })
    root.appendChild(dayCard);
    return dayCard;
}
export function renderMonth(month) {
    const shownMonth = document.querySelector("h1");
    shownMonth.textContent = months[month];
}
export function renderYear(selectedYear) {
    const select = document.querySelector("#year-selector");

    for (let year = 1950; year <= 2050; year++) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;

        if (year === selectedYear) {
            option.selected = true;
        }

        select.appendChild(option);
    }
    select.onchange = (event) => {
        const selectedYear = event.target.value;
        console.log(selectedYear)
        const selectedMonth = months.indexOf(document.querySelector("h1").textContent)
        console.log(months.indexOf(document.querySelector("h1").textContent))
        renderCalendar(selectedMonth, selectedYear)
    };
}
    const nextBtn = document.querySelector(".next-month");
    nextBtn.addEventListener("click", () => {
        currentMonth++;
        const selectedYear = document.querySelector("#year-selector").value;
        if (currentMonth > 11) {
            currentMonth = 0;
            selectedYear++;
        }

        renderCalendar(currentMonth, selectedYear);
    });

const previousMonth = document.querySelector(".previous-month");
previousMonth.addEventListener("click", () => {
    currentMonth--;
    const selectedYear = document.querySelector("#year-selector").value;

    if (currentMonth < 0) {
        currentMonth = 11;
        selectedYear--;
    }

    renderCalendar(currentMonth, selectedYear);
});
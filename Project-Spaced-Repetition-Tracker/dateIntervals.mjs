// This functions adds a given number of months to a date
function addMonths(date, months) {
  const dte = new Date(date); // This is cloning the original date
  const day = dte.getDate();  // This stores the original day (e.g. 31)
  dte.setMonth(dte.getMonth() + months); // Adding months 

  // This handles invalid dates after adding months
  if (dte.getDate() < day) {
    dte.setDate(0);
  }

  return dte;
}

// This function returns spaced repetition dates from a start date
function getSpacedRepetitionDates(startDate) {
  const baseDate = new Date(startDate);
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0); // Truncate time for comparison
  
  const intervals = [
    { days: 7, months: 0 }, // 1 week
    { days: 0, months: 1 }, // 1 month
    { days: 0, months: 3 }, // 3 months
    { days: 0, months: 6 }, // 6 months
    { days: 0, months: 12 }, // 1 year
  ];

  // This is mapping each interval to a new date based on the start date
  return intervals.map((interval) => {
    let date = new Date(baseDate);
    if (interval.days) {
      date.setDate(date.getDate() + interval.days);
    }
    if (interval.months) {
      date = addMonths(date, interval.months);
    }
    // Truncate time for display (set to 00:00:00 UTC)
    date.setUTCHours(0, 0, 0, 0);
    return date.toISOString().slice(0, 10); // Slicing to return only the dates
  });
}

export { getSpacedRepetitionDates };

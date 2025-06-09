function addMonths(date, months) {
  const dte = new Date(date);
  const day = dte.getDate();
  dte.setMonth(dte.getMonth() + months);

  if (dte.getDate() < day) {
    dte.setDate(0);
  }

  return dte;
}

function getSpacedRepetitionDates(startDate) {
  const baseDate = new Date(startDate);
  const intervals = [
    { days: 7, months: 0 }, // 1 week
    { days: 0, months: 1 }, // 1 month
    { days: 0, months: 3 }, // 3 months
    { days: 0, months: 6 }, // 6 months
    { days: 0, months: 12 }, // 1 year
  ];

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
    return date.toISOString().slice(0, 10); 
  });
}

export { getSpacedRepetitionDates };

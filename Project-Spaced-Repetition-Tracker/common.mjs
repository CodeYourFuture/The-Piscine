export function getUserIds() {
  return ["1", "2", "3", "4", "5"];
}

export function getOrdinal(date) {
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthStr = months[month];
  if (day > 3 && day < 21) return `${day}th ${monthStr} ${year}`;
  switch (day % 10) {
    case 1:
      return `${day}st ${monthStr} ${year}`;
    case 2:
      return `${day}nd ${monthStr} ${year}`;
    case 3:
      return `${day}rd ${monthStr} ${year}`;
    default:
      return `${day}th ${monthStr} ${year}`;
  }
}

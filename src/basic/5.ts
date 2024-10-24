enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

let day: DayOfWeek.Saturday | DayOfWeek.Sunday;

// const isWeekend = (day: DayOfWeek) => {
//   return DayOfWeek.Saturday || DayOfWeek.Sunday;
// };

const isWeekend = (day: DayOfWeek): boolean => {
  return !day;
};

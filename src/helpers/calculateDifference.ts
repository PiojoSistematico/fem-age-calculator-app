export function calculateDifference(
  day: string,
  month: string,
  year: string
): string[] {
  if (year == "--" || month == "--" || day == "--") return ["--", "--", "--"];

  const today: Date = new Date();
  const dob: Date = new Date(
    Number(year),
    Number(month) - 1,
    Number(day)
  ); /* months index star at 0 */

  let yearsDifference: number = -99;
  let monthsDifference: number = -99;
  let daysDifference: number = -99;

  //Get years
  if (year != "--") yearsDifference = today.getFullYear() - dob.getFullYear();

  //Get months
  if (month != "--") {
    if (today.getMonth() >= dob.getMonth()) {
      monthsDifference = today.getMonth() - dob.getMonth();
    } else {
      yearsDifference = yearsDifference - 1;
      monthsDifference = 12 + today.getMonth() - dob.getMonth();
    }
  }

  //Get days
  if (day != "--") {
    if (today.getDate() >= dob.getDate()) {
      daysDifference = today.getDate() - dob.getDate();
    } else {
      monthsDifference = monthsDifference - 1;
      daysDifference = 31 + today.getDate() - dob.getDate();
      if (monthsDifference < 0) {
        monthsDifference = 11;
        yearsDifference--;
      }
    }
  }

  return [
    daysDifference == -99 ? "--" : daysDifference.toString(),
    monthsDifference == -99 ? "--" : monthsDifference.toString(),
    yearsDifference == -99 ? "--" : yearsDifference.toString(),
  ];
}

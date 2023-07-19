export function calculateDifference(
  day: string,
  month: string,
  year: string
): string[] {
  if (year === "--" || month === "--" || day === "--")
    return ["--", "--", "--"];

  const today: Date = new Date();
  const dob: Date = new Date(Number(year), Number(month) - 1, Number(day));

  // Check if the date provided is valid
  if (isNaN(dob.getTime())) return ["--", "--", "--"];

  let yearsDifference: number = today.getFullYear() - dob.getFullYear();
  let monthsDifference: number = today.getMonth() - dob.getMonth();
  let daysDifference: number = today.getDate() - dob.getDate();

  // Adjust the differences if the current day/month is before the birthday
  if (daysDifference < 0) {
    monthsDifference -= 1;
    const lastMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      today.getDate()
    );
    daysDifference = Math.floor(
      (today.getTime() - lastMonth.getTime()) / (1000 * 60 * 60 * 24)
    );
  }
  if (monthsDifference < 0) {
    yearsDifference -= 1;
    monthsDifference += 12;
  }

  return [
    daysDifference.toString(),
    monthsDifference.toString(),
    yearsDifference.toString(),
  ];
}

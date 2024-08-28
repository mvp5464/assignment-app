export const dateFormatFunction = (dateValue: Date | string) => {
  const tempDate = new Date(dateValue);

  const day = tempDate.getDate().toString().padStart(2, "0");
  const month = tempDate.toLocaleString("en-US", { month: "short" });
  const year = tempDate.getFullYear();

  return `${day} ${month} ${year}`;
};

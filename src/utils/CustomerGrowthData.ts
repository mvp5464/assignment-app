interface CustomerGrowthDataType {
  id: number;
  color: string;
  country: string;
  customers: string;
  percentage: number | string;
}

export const customerGrowthData: CustomerGrowthDataType[] = [
  {
    id: 1,
    color: "22CAAD",
    country: "USA",
    customers: "1,240",
    percentage: 80,
  },
  {
    id: 2,
    color: "F86624",
    country: "Japan",
    customers: "1,240",
    percentage: 60,
  },
  {
    id: 3,
    color: "F9C80E",
    country: "France",
    customers: "1,240",
    percentage: 49,
  },
  {
    id: 4,
    color: "2086BF",
    country: "Germany",
    customers: "1,240",
    percentage: 100,
  },
  {
    id: 5,
    color: "EB3D4D",
    country: "South Korea",
    customers: "1,240",
    percentage: 50,
  },
];

customerGrowthData.forEach((data) => {
  data.color = `bg-[#${data.color}]`;
  data.percentage = `w-[${data.percentage}%]`;
});

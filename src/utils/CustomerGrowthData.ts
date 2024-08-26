interface CustomerGrowthDataType {
  id: number;
  color: string;
  country: string;
  customers: string;
  percentage: string;
}

export const customerGrowthData: CustomerGrowthDataType[] = [
  {
    id: 1,
    color: "bg-[#22CAAD]",
    country: "USA",
    customers: "1,240",
    percentage: "w-[80%]",
  },
  {
    id: 2,
    color: "bg-[#F86624]",
    country: "Japan",
    customers: "1,240",
    percentage: "w-[60%]",
  },
  {
    id: 3,
    color: "bg-[#F9C80E]",
    country: "France",
    customers: "1,240",
    percentage: "w-[49%]",
  },
  {
    id: 4,
    color: "bg-[#2086BF]",
    country: "Germany",
    customers: "1,240",
    percentage: "w-[100%]",
  },
  {
    id: 5,
    color: "bg-[#EB3D4D]",
    country: "South Korea",
    customers: "1,240",
    percentage: "w-[50%]",
  },
];

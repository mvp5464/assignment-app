interface MainInfoDataType {
  id: number;
  title: string;
  numbers: string;
  percentage: number;
  changes: number;
  icon: string;
}

export const mainInfoData: MainInfoDataType[] = [
  {
    id: 1,
    title: "Total Project",
    numbers: "6,784",
    percentage: 10,
    changes: 150,
    icon: "TotalProjectBoxIcon",
  },
  {
    id: 2,
    title: "In Progress",
    numbers: "1,920",
    percentage: 10,
    changes: 150,
    icon: "InProgressBoxIcon",
  },
  {
    id: 3,
    title: "Finished",
    numbers: "4,412",
    percentage: 10,
    changes: 150,
    icon: "FinishedBoxIcon",
  },
  {
    id: 4,
    title: "Unfinished",
    numbers: "329",
    percentage: 10,
    changes: 150,
    icon: "UnfinishedBoxIcon",
  },
];

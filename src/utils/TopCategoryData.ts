interface TopCategoryDataType {
  id: number;
  bgColor: string;
  textColor: string;
  icon: string;
  title: string;
  digit: string;
  percentage: string;
}

export const topCategoryData: TopCategoryDataType[] = [
  {
    id: 1,
    bgColor: "EAF8FF",
    textColor: "2086BF",
    icon: "PhoneIcon",
    title: "Smartphone",
    digit: "1,509",
    percentage: "+12",
  },
  {
    id: 2,
    bgColor: "FFF0EA",
    textColor: "F86624",
    icon: "TabletIcon",
    title: "Tablet",
    digit: "1,460",
    percentage: "-5",
  },
  {
    id: 3,
    bgColor: "E9FAF7",
    textColor: "22CAAD",
    icon: "EarphoneIcon",
    title: "Earphone",
    digit: "1,229",
    percentage: "0",
  },
  {
    id: 4,
    bgColor: "FEECEE",
    textColor: "EB3D4D",
    icon: "LaptopIcon",
    title: "Laptop & PC",
    digit: "982",
    percentage: "+19",
  },
  {
    id: 5,
    bgColor: "EAF8FF",
    textColor: "2BB2FE",
    icon: "MouseIcon",
    title: "Mouse",
    digit: "791",
    percentage: "-25",
  },
  {
    id: 6,
    bgColor: "FFFAE7",
    textColor: "F9C80E",
    icon: "USBIcon",
    title: "Hardisk & USB Drive",
    digit: "679",
    percentage: "+11",
  },
  {
    id: 7,
    bgColor: "F0F1F3",
    textColor: "4A4C56",
    icon: "CameraIcon",
    title: "Camera",
    digit: "679",
    percentage: "+11",
  },
];

topCategoryData.forEach((data) => {
  data.bgColor = `bg-[#${data.bgColor}]`;
  data.textColor = `text-[#${data.textColor}]`;
});

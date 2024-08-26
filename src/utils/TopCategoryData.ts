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
    bgColor: "bg-[#EAF8FF]",
    textColor: "text-[#2086BF]",
    icon: "PhoneIcon",
    title: "Smartphone",
    digit: "1,509",
    percentage: "+12",
  },
  {
    id: 2,
    bgColor: "bg-[#FFF0EA]",
    textColor: "text-[#F86624]",
    icon: "TabletIcon",
    title: "Tablet",
    digit: "1,460",
    percentage: "-5",
  },
  {
    id: 3,
    bgColor: "bg-[#E9FAF7]",
    textColor: "text-[#22CAAD]",
    icon: "EarphoneIcon",
    title: "Earphone",
    digit: "1,229",
    percentage: "0",
  },
  {
    id: 4,
    bgColor: "bg-[#FEECEE]",
    textColor: "text-[#EB3D4D]",
    icon: "LaptopIcon",
    title: "Laptop & PC",
    digit: "982",
    percentage: "+19",
  },
  {
    id: 5,
    bgColor: "bg-[#EAF8FF]",
    textColor: "text-[#2BB2FE]",
    icon: "MouseIcon",
    title: "Mouse",
    digit: "791",
    percentage: "-25",
  },
  {
    id: 6,
    bgColor: "bg-[#FFFAE7]",
    textColor: "text-[#F9C80E]",
    icon: "USBIcon",
    title: "Hardisk & USB Drive",
    digit: "679",
    percentage: "+11",
  },
  {
    id: 7,
    bgColor: "bg-[#F0F1F3]",
    textColor: "text-[#4A4C56]",
    icon: "CameraIcon",
    title: "Camera",
    digit: "679",
    percentage: "+11",
  },
];

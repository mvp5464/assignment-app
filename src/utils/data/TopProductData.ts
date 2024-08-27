interface TopProductDataType {
  id: number;
  title: string;
  subTitle: string;
  digit: string;
}

export const topProductData: TopProductDataType[] = [
  { id: 1, title: "Logic+ Wireless Mouse", subTitle: "Mouse", digit: "1,240" },
  {
    id: 2,
    title: "PS Wireless Controller",
    subTitle: "Smartphone",
    digit: "1,189",
  },
  {
    id: 3,
    title: "Ximi Mechanical Keyboard",
    subTitle: "Smartphone",
    digit: "1,100",
  },
  { id: 4, title: "Audia Tech Earphone", subTitle: "Earphone", digit: "908" },
  { id: 5, title: "Sams S14 Pro", subTitle: "Tablet", digit: "900" },
  { id: 6, title: "Sams A13 5G", subTitle: "Smartphone", digit: "870" },
  { id: 7, title: "Jsound P01 TWS", subTitle: "Earphone", digit: "870" },
];

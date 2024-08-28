export interface OrderSectionDataType {
  id: number;
  orderId: number;
  productName: string;
  productDescription: string;
  date: any;
  customer: string;
  total: number;
  payment: string;
  status: "Processing" | "Delivered" | "Cancelled" | "Shiped" | "Published";
}

export const orderSectionData: OrderSectionDataType[] = [
  {
    id: 1,
    orderId: 302012,
    productName: "Handmade Pouch",
    productDescription: "+3 Products",
    date: "29 Dec 2022",
    customer: "John Bushmill",
    total: 121,
    payment: "Mastercard",
    status: "Processing",
  },
  {
    id: 2,
    orderId: 302011,
    productName: "Smartwatch E2",
    productDescription: "+2 Products",
    date: "24 Dec 2022",
    customer: "Linda Blair",
    total: 590,
    payment: "Visa",
    status: "Delivered",
  },
  {
    id: 3,
    orderId: 302002,
    productName: "Smartwatch E1",
    productDescription: "+3 Products",
    date: "12 Dec 2022",
    customer: "M Karim",
    total: 125,
    payment: "Matercard",
    status: "Cancelled",
  },
  {
    id: 4,
    orderId: 301901,
    productName: "Headphone G1 Pro",
    productDescription: "+3 Products",
    date: "21 Oct 2022",
    customer: "Rajesh Masvidal",
    total: 348,
    payment: "Matercard",
    status: "Shiped",
  },
  {
    id: 5,
    orderId: 301900,
    productName: "Iphone X",
    productDescription: "+3 Products",
    date: "21 Oct 2022",
    customer: "Laura Prichet",
    total: 607,
    payment: "Visa",
    status: "Shiped",
  },
  {
    id: 6,
    orderId: 301881,
    productName: "Puma Shoes",
    productDescription: "+3 Products",
    date: "21 Oct 2022",
    customer: "Tracy Williams",
    total: 234,
    payment: "Matercard",
    status: "Published",
  },
  {
    id: 7,
    orderId: 301643,
    productName: "Logic+ Wireless Mouse",
    productDescription: "+3 Products",
    date: "19 Sep 2022",
    customer: "Bryan Barker",
    total: 760,
    payment: "Pay Pal",
    status: "Cancelled",
  },
  {
    id: 8,
    orderId: 301600,
    productName: "PS+ Wireless Controller",
    productDescription: "+3 Products",
    date: "19 Sep 2022",
    customer: "John Adam",
    total: 400,
    payment: "Pay Pal",
    status: "Delivered",
  },
  {
    id: 9,
    orderId: 301555,
    productName: "Lego Car",
    productDescription: "+3 Products",
    date: "19 Sep 2022",
    customer: "Lucy Driver",
    total: 812,
    payment: "Matercard",
    status: "Delivered",
  },
  {
    id: 10,
    orderId: 301002,
    productName: "Sams S14 Pro",
    productDescription: "+3 Products",
    date: "10 Aug 2022",
    customer: "Alex Holland",
    total: 123,
    payment: "Matercard",
    status: "Cancelled",
  },
];

interface RecentOrdersDataType {
  id: number;
  productName: string;
  productDetails?: string;
  customerName: string;
  customerEmail: string;
  total: number;
  status: "Processing" | "Shiped" | "Delivered";
}

export const recentOrdersData: RecentOrdersDataType[] = [
  {
    id: 1,
    productName: "Handmande Pouch",
    productDetails: "+3 other products",
    customerName: "John Bushmill",
    customerEmail: "Johnb@mail.com",
    total: 121,
    status: "Processing",
  },
  {
    id: 2,
    productName: "Smartwatch E2",
    productDetails: "+1 other products",
    customerName: "Ilham BUdi Agung",
    customerEmail: "ilahmbudi@mail.com",
    total: 590,
    status: "Processing",
  },
  {
    id: 3,
    productName: "Smartwatch E1",
    customerName: "Mohammad Karim",
    customerEmail: "m_karim@mail.com",
    total: 125,
    status: "Shiped",
  },
  {
    id: 4,
    productName: "Headphone G1 Pro",
    productDetails: "+1 other products",
    customerName: "Linda Blair",
    customerEmail: "lindablair@mail.com",
    total: 348,
    status: "Shiped",
  },
  {
    id: 5,
    productName: "Iphone X",
    customerName: "Josh Adam",
    customerEmail: "josh_adam@mail.com",
    total: 607,
    status: "Delivered",
  },
];

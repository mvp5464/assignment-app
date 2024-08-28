export interface ProductSectionDataType {
  id: number;
  productName: string;
  productDescription: string;
  sku: number;
  category: string;
  stock: number;
  price: number;
  status: "Low Stock" | "Published" | "Draft" | "Out of Stock";
  createdAt: any;
}

export const productSectionData: ProductSectionDataType[] = [
  {
    id: 1,
    productName: "Handmade Pouch",
    productDescription: "3 Variants",
    sku: 302012,
    category: "Bag & Pouch",
    stock: 10,
    price: 121,
    status: "Low Stock",
    createdAt: "29 Dec 2022",
  },
  {
    id: 2,
    productName: "Smartwatch E2",
    productDescription: "2 Variants",
    sku: 302011,
    category: "Watch",
    stock: 204,
    price: 590,
    status: "Published",
    createdAt: "24 Dec 2022",
  },
  {
    id: 3,
    productName: "Smartwatch E1",
    productDescription: "3 Variants",
    sku: 302002,
    category: "Watch",
    stock: 48,
    price: 125,
    status: "Draft",
    createdAt: "12 Dec 2022",
  },
  {
    id: 4,
    productName: "Headphone G1 Pro",
    productDescription: "1 Variants",
    sku: 301901,
    category: "Audio",
    stock: 401,
    price: 348,
    status: "Published",
    createdAt: "21 Oct 2022",
  },
  {
    id: 5,
    productName: "Iphone X",
    productDescription: "4 Variants",
    sku: 301900,
    category: "Smartphone",
    stock: 120,
    price: 607,
    status: "Published",
    createdAt: "21 Oct 2022",
  },
  {
    id: 6,
    productName: "Puma Shoes",
    productDescription: "3 Variants",
    sku: 301881,
    category: "Shoes",
    stock: 432,
    price: 234,
    status: "Published",
    createdAt: "21 Oct 2022",
  },
  {
    id: 7,
    productName: "Logic+ Wireless Mouse",
    productDescription: "1 Variants",
    sku: 301643,
    category: "Mouse",
    stock: 0,
    price: 760,
    status: "Out of Stock",
    createdAt: "19 Sep 2022",
  },
  {
    id: 8,
    productName: "Nike Shoes",
    productDescription: "3 Variants",
    sku: 301600,
    category: "Shoes",
    stock: 347,
    price: 400,
    status: "Published",
    createdAt: "19 Sep 2022",
  },
  {
    id: 9,
    productName: "Lego Car",
    productDescription: "2 Variants",
    sku: 301555,
    category: "Toys",
    stock: 299,
    price: 812,
    status: "Published",
    createdAt: "19 Sep 2022",
  },
  {
    id: 10,
    productName: "PS Wireless Controller",
    productDescription: "3 Variants",
    sku: 301002,
    category: "Beauty",
    stock: 38,
    price: 123,
    status: "Draft",
    createdAt: "10 Aug 2022",
  },
];

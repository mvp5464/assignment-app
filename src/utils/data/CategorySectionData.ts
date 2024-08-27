export interface CategorySectionDataType {
  [x: string]: any;
  id: number;
  categoryName: string;
  categoryDescription?: string;
  sold: number;
  stock: number;
  added: string;
}

export const categorySectionData: CategorySectionDataType[] = [
  {
    id: 1,
    categoryName: "Bag & Pouch",
    categoryDescription: "Great fashion, great selections, great prices",
    sold: 12100,
    stock: 10,
    added: "29 Dec 2022",
  },
  {
    id: 2,
    categoryName: "Watch",
    categoryDescription:
      "Our range of watches are perfect whether you're looking to upgrade.",
    sold: 59000,
    stock: 204,
    added: "24 Dec 2022",
  },
  {
    id: 3,
    categoryName: "Audio",
    categoryDescription:
      "Our big range of audio devices makes it easy to upgrade your device at a great price.",
    sold: 12500,
    stock: 48,
    added: "12 Dec 2022",
  },
  {
    id: 4,
    categoryName: "Smartphone",
    categoryDescription: "Our smartphone include all the big brands.",
    sold: 34800,
    stock: 401,
    added: "21 Oct 2022",
  },
  {
    id: 5,
    categoryName: "Shoes",
    categoryDescription:
      "Whatever your activity needs are, we've got you covered.",
    sold: 60700,
    stock: 120,
    added: "21 Oct 2022",
  },
  {
    id: 6,
    categoryName: "Mouse",
    categoryDescription: "Our mouses include all the big brands.",
    sold: 23400,
    stock: 432,
    added: "21 Oct 2022",
  },
  {
    id: 7,
    categoryName: "Toys",
    categoryDescription: "Get the perfect gift for the little ones.",
    sold: 76000,
    stock: 0,
    added: "19 Sep 2022",
  },
  {
    id: 8,
    categoryName: "Laptop",
    categoryDescription: "Our laptop include all the big brands.",
    sold: 400,
    stock: 347,
    added: "19 Sep 2022",
  },
  {
    id: 9,
    categoryName: "Games",
    categoryDescription: "We have the perfect gear for you",
    sold: 812,
    stock: 299,
    added: "19 Sep 2022",
  },
  {
    id: 10,
    categoryName: "Camera",
    categoryDescription:
      "You'll find exactly what you're looking for with our huge range of cameras.",
    sold: 123,
    stock: 38,
    added: "20 Aug 2022",
  },
];

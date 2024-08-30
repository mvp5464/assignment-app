interface MenuWithLinkType {
  title: string;
  link: string;
  image: string;
}

interface MenuWithLinkwithoutImageType {
  title: string;
  link: string;
}

interface MenuWithoutLinkType {
  title: string;
  image: string;
}

export interface NavbarType {
  menu: MenuWithLinkType | MenuWithoutLinkType;
  subMenu?: MenuWithLinkwithoutImageType[];
}

export const navbarData: NavbarType[] = [
  {
    menu: { title: "Dashboard", link: "dashboard", image: "DashboardIcon" },
  },
  {
    menu: { title: "E-Commerce", image: "ECommerceIcon" },
    subMenu: [
      { title: "Categories", link: "dashboard/categories" },
      { title: "Product", link: "dashboard/product_list" },
      { title: "Orders", link: "dashboard/order_list" },
      { title: "Search", link: "dashboard/search" },
    ],
  },
];

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
      { title: "Orders", link: "dashboard/orders_list" },
      // { title: "Customer", link: "dashboard/customer" },
    ],
  },
  // {
  //   menu: { title: "Project", link: "project", image: "ProjectIcon" },
  // },
  // {
  //   menu: { title: "Contact", image: "ContactIcon" },
  //   subMenu: [{ title: "Contact Us", link: "contact" }],
  // },
  // {
  //   menu: {
  //     title: "File Manager",
  //     link: "file_manager",
  //     image: "FileManagerIcon",
  //   },
  // },
  // {
  //   menu: { title: "Chat", link: "chat", image: "ChatIcon" },
  // },
  // {
  //   menu: { title: "Calendar", link: "calendar", image: "CalendarIcon" },
  // },
];

import { AppsRoutes } from "@/Route/AuthRoutes";

export const sidebarConfig = [
  {
    type: "",
    iconClass: "ph-duotone ph-house-line",
    name: "dashboard",
    badgeCount: "",
    collapseId: "dashboard",
    path: "/dashboard",
    // children: [
    //     {name: "Ecommerce", path: DashboardRoutes.ECOMMERCE_PAGE},
    //     {name: "Project", path: DashboardRoutes.PROJECT_PAGE},
    //     {name: "Crypto", path: DashboardRoutes.CRYPTO_PAGE},
    //     {name: "Education", path: DashboardRoutes.EDUCATION_PAGE},
    // ],
  },
  {
    type: "dropdown",
    iconClass: "ph-duotone ph-stack",
    badgeCount: 4,
    collapseId: "inquiry",
    name: "Inquiry",
    path: "/inquiry",
    children: [
      { name: "Create", path: AppsRoutes.INQUIRY_CREATE_PAGE },
      { name: "Board", path: AppsRoutes.INQUIRY_BOARD_PAGE },
      { name: "List", path: AppsRoutes.INQUIRY_LIST_PAGE },
      { name: "Trip", path: AppsRoutes.INQUIRY_TRIP_PAGE },
    ],
  },
  // {
  //     type: "",
  //     iconClass: "ph-duotone ph-stack",
  //     collapseId: "inquiry_create",
  //     name: "Inquiry Create",
  //     path: AppsRoutes.INQUIRY_CREATE_PAGE,
  // },
];

import {
    AppsRoutes,
} from "@/Route/AuthRoutes";

export const sidebarConfig = [
    {
        type: "dropdown",
        iconClass: "ph-duotone ph-house-line",
        name: "dashboard",
        badgeCount: 4,
        collapseId: "dashboard",
        path: '/dashboard',
        // children: [
        //     {name: "Ecommerce", path: DashboardRoutes.ECOMMERCE_PAGE},
        //     {name: "Project", path: DashboardRoutes.PROJECT_PAGE},
        //     {name: "Crypto", path: DashboardRoutes.CRYPTO_PAGE},
        //     {name: "Education", path: DashboardRoutes.EDUCATION_PAGE},
        // ],
    },
    {
        type: "",
        iconClass: "ph-duotone ph-stack",
        collapseId: "inquiry",
        name: "Inquiry",
        path: AppsRoutes.INQUIRY_BOARD_PAGE,
    },
    
];
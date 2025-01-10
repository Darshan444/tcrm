import React from "react";
import { useRoutes } from "react-router-dom";
import { AppsRoutes } from "@/Route/AuthRoutes";
import Layout from "@/Layout";

const InquiryBoard = React.lazy(() => import("@/Pages/Inquiry/inquiryBoard"));
const InquiryCreate = React.lazy(() => import("@/Pages/Inquiry/inquiryCreate"));
const InquiryList = React.lazy(() => import("@/Pages/Inquiry/inquiryList"));
const InquiryTrip = React.lazy(() => import("@/Pages/Inquiry/inquiryTrip"));
const InquiryDetail = React.lazy(() => import("@/Pages/Inquiry/InquiryDetail"));
var a;

const Routes = () => {
  let element = [
    {


           path: "/",



      element: <Layout />,
              children: [
        { path: AppsRoutes.INQUIRY_BOARD_PAGE, element: <InquiryBoard /> },
        { path: AppsRoutes.INQUIRY_CREATE_PAGE, element: <InquiryCreate /> },
        { path: AppsRoutes.INQUIRY_LIST_PAGE, element: <InquiryList /> },
        { path: AppsRoutes.INQUIRY_TRIP_PAGE, element: <InquiryTrip /> },
        { path: AppsRoutes.INQUIRY_DETAIL_PAGE, element: <InquiryDetail /> },
      ],
    },
    // AuthRoutes
    // {path: AuthRoutes.AUTH_SIGN_IN, element: <SignIn/>},
    // {path: AuthRoutes.AUTH_SIGN_IN_IMG, element: <SignInBgImage/>},
    // {path: AuthRoutes.AUTH_SIGN_UP, element: <SignUp/>},
    // {path: AuthRoutes.AUTH_SIGN_UP_IMG, element: <SignUpBgImage/>},
    // {path: AuthRoutes.AUTH_PASSWORD_RESET, element: <PasswordReset/>},
    // {path: AuthRoutes.AUTH_PASSWORD_RESET_IMG, element: <PasswordResetBgImage/>},
    // {path: AuthRoutes.AUTH_PASSWORD_CREATE, element: <PasswordCreate/>},
    // {path: AuthRoutes.AUTH_PASSWORD_CREATE_IMG, element: <PasswordCreateBgImage/>},
    // {path: AuthRoutes.AUTH_LOCK_SCREEN, element: <LockScreen/>},
    // {path: AuthRoutes.AUTH_LOCK_SCREEN_IMG, element: <LockScreenBgImage/>},
    // {path: AuthRoutes.AUTH_VERIFICATION, element: <Verification/>},
    // {path: AuthRoutes.AUTH_VERIFICATION_IMG, element: <VerificationBgImg/>},

    // / ErrorRotes
    // {path: ErrorRoutes.ERROR_400, element: <BadRequest/>},
    // {path: ErrorRoutes.ERROR_403, element: <Forbidden/>},
    // {path: ErrorRoutes.ERROR_404, element: <NotFound/>},
    // {path: ErrorRoutes.ERROR_500, element: <InternalServer/>},
    // {path: ErrorRoutes.ERROR_503, element: <ServiceUnavailable/>},

    // otherRoutes
    // {path: OtherRoutes.MAINTENANCE_PAGE, element: <Maintenance/>},
    // {path: OtherRoutes.OTHER_LANDING_PAGE, element: <Landing/>},

    // {path: OtherRoutes.COMING_SOON, element: <ComingSoon/>}
  ];
  return useRoutes(element);
};

export default Routes;

import { createBrowserRouter } from "react-router-dom";
import Notification from "../component/Main/Notification/Notification";
import MainLayout from "../layout/MainLayout";
import ForgetPassword from "../page/Auth/ForgetPassword/ForgetPassword";
import NewPassword from "../page/Auth/NewPassword/NewPassword";
import Otp from "../page/Auth/Otp/Otp";
import SignIn from "../page/Auth/SignIn/SignIn";
import DashboardHome from "../page/DashboardHome/DashboardHome";import PersonalInformation from "../component/Main/PersonalInformation/PersonalInformation";
import EditInformation from "../component/Main/EditPersonalInfo/EditPersonalInfo";
import Settings from "../component/Main/Settings/Settings";
import EditPrivacyPolicy from "../component/Main/EditPrivacyPolicy/EditPrivacyPolicy";
import TermsCondition from "../component/Main/TermsConditions/TermsCondition";
import AboutUs from "../component/Main/AboutUs/AboutUs";
import EditTermsConditions from "../component/Main/EditTermsConditions/EditTermsConditions";
import EditAboutUs from "../component/Main/EditAboutUs/EditAboutUs";
import PrivacyPolicy from "../page/PrivacyPolicy/PrivacyPolicy";
import ErrorPage from "../component/Main/ErrorPage/ErrorPage";
import Subscription from "../component/Main/Subscription/Subscription";
import AllDrivers from "../component/Main/AllDrivers/AllDrivers";
import AllCompany from "../component/Main/AllCompany/AllCompany";
import Earnings from "../component/Main/Earning/Earning";
import AddSubscription from "../component/Main/AddSubscription/AddSubscription";
import EditSubscription from "../component/Main/EditSubscription/EditSubscription";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <AdminRoutes>
      // </AdminRoutes>
      <MainLayout />
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "all-drivers",
        element: <AllDrivers />,
      },
      {
        path: "all-companys",
        element: <AllCompany />,
      },
      {
        path: "/subscriptions",
        element: <Subscription />,
      },
      {
        path: "/add-subscription",
        element: <AddSubscription />,
      },
      {
        path: "/edit-subscription/:id",
        element: <EditSubscription />,
      },
      {
        path: "/earning",
        element: <Earnings />,
      },
      {
        path: "personal-info",
        element: <PersonalInformation />,
      },
      {
        path: "edit-personal-info",
        element: <EditInformation />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "settings/about-us",
        element: <AboutUs />,
      },
      {
        path: "settings/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "settings/terms-conditions",
        element: <TermsCondition />,
      },
      {
        path: "settings/about-us",
        element: <AboutUs />,
      },
      {
        path: "settings/edit-privacy-policy",
        element: <EditPrivacyPolicy />,
      },
      {
        path: "settings/edit-terms-conditions",
        element: <EditTermsConditions />,
      },
      {
        path: "settings/edit-about-us",
        element: <EditAboutUs />,
      },
      {
        path: "/notifications",
        element: <Notification />,
      },
    ],
  },
  {
    path: "/auth",
    errorElement: <h1>Auth Error</h1>,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "otp/:email",
        element: <Otp />,
      },
      {
        path: "new-password/:email",
        element: <NewPassword />,
      },
    ],
  },
]);

export default router;

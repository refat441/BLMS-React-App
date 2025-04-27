import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>, // Set AdminLogin as the default route
    },
    {
      path: "/adminlogin",
      element: <AdminLogin />,
    },
    // {
    //   path: "/dashboard",
    //   element: <RootLayout />,
    //   children: [
    //     {
    //       path: "", // Relative path (renders Dashboard on /dashboard)
    //       element: <Dashboard />,
    //     },
    //     {
    //       path: "about", // Relative path (renders About on /dashboard/about)
    //       element: <About />,
    //     },
    //     {
    //       path: "category", // Relative path (renders Category on /dashboard/category)
    //       element: <Category />,
    //     },
    //     {
    //       path: "product", // Relative path (renders Product on /dashboard/product)
    //       element: <Product />,
    //     },
    //     {
    //       path: "branch", // Relative path (renders Branch on /dashboard/branch)
    //       element: <Branch />,
    //     },
    //     {
    //       path: "staff", // Relative path (renders Staff on /dashboard/staff)
    //       element: <Staff />,
    //     },
    //     {
    //       path: "superdashboard", // Relative path (renders SuperDashboard on /dashboard/superdashboard)
    //       element: <SuperDashboard />,
    //     },
    //     {
    //       path: "adminupdateform", // Relative path (renders AdminUpdateForm on /dashboard/adminupdateform)
    //       element: <AdminUpdateForm />,
    //     },
    //   ],
    // },
  ]);
  
  export default router;
  
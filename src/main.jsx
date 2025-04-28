import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from "./App";

// Pages
import Home from "./pages/Home";
import DoctorDetails from "./pages/DoctorDetails"; 
import Bookings from "./pages/Bookings";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/Blogs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      { index: true, element: <Home /> },
      { path: "doctors/:id", element: <DoctorDetails /> }, 
      { path: "bookings", element: <Bookings /> },
      { path: "blogs", element: <Blogs /> },
    ],
  },
  {
    path:'/*',
    element:<NotFound/>
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);

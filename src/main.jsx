import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root.jsx";
import Home from "./Pages/Home/Home.jsx";
import VisaPage from "./Pages/Visa/VisaPage.jsx";
import HotelPage from "./Pages/Hotel/HotelPage.jsx";
import TourPage from "./Pages/Tour/TourPage.jsx";
import FlightPage from "./Pages/Flight/FlightPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/visa",
        element: <VisaPage />,
      },
      {
        path: "/hotel",
        element: <HotelPage />,
      },
      {
        path: "/tour",
        element: <TourPage />,
      },
      {
        path: "/flight",
        element: <FlightPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

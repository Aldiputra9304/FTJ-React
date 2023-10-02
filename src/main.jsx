import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailArtikel from "./pages/DetailArtikel.jsx";
import ErorPage from "./pages/ErorPage.jsx";
import Iklan from "./pages/Iklan.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/detailartikel",
    element: <DetailArtikel/>,
  },
  {
     path: "*",
     element: <ErorPage/>,
  },
  {
     path: "iklan",
     element: <Iklan/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

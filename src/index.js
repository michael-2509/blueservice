import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";

// blue service
// import Home from "./pages/Home";
// import Service from "./pages/Service";
import HomeProduct from "./pages/product/HomeProduct";
import ProductLists from "./pages/product/ProductLists";

const router = createBrowserRouter([
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/",
    element: <HomeProduct />,
  },
  {
    path: "/productlist",
    element: <ProductLists />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

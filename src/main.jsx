import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/login";
import Register from "./pages/register";
import ErrorPage from "./pages/404";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./pages/Products";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/products",
    element: <ProductsPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

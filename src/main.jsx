import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ErrorPage from "./pages/404";
import ProfilePage from "./pages/profile";
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
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/products",
    element: <ProductsPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

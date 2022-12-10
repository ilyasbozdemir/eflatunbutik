import { Routes, Route } from "react-router-dom";
import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Page404 = React.lazy(() => import("./pages/ErrorPage/Page404"));
const Favorite = React.lazy(() => import("./pages/Favorite"));
const Basket = React.lazy(() => import("./pages/Basket"));
const Login = React.lazy(() => import("./pages/Login"));

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Catalog = React.lazy(() => import("./pages/Dashboard/Catalog"));
const Order = React.lazy(() => import("./pages/Dashboard/Order"));

const User = React.lazy(() => import("./pages/Dashboard/User"));
const UserLogin = React.lazy(() => import("./pages/Dashboard/UserLogin"));
const RequireAuth = React.lazy(() => import("../src/components/RequireAuth"));
const CategoryProduct = React.lazy(() => import("./pages/CategoryProduct"));

const routes = [
  {
    path: "",
    element: "",
    children: [
      {
        path: "",
        element: "",
      },
    ],
  },
];

export default routes;

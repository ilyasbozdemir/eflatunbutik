import React from "react";
import ProtectedRoute from "../src/components/ProtectedRoute";

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
const AuthLayout = React.lazy(() => import("./Layout/AuthLayout"));
const Layout = React.lazy(() => import("./Layout"));

const categories = [
  {
    path: "/yeni-gelenler/",
    element: (
      <CategoryProduct
        breadcrumbs={[
          { item: "Anasayfa", link: "/", isCurrentPage: false },
          {
            item: "Yeni Gelenler",
            isCurrentPage: true,
          },
        ]}
      />
    ),
  },
  {
    path: "/triko/",
    element: (
      <CategoryProduct
        breadcrumbs={[
          { item: "Anasayfa", link: "/", isCurrentPage: false },
          {
            item: "Triko",
            isCurrentPage: true,
          },
        ]}
      />
    ),
  },
  {
    path: "/elbise/",
    element: (
      <CategoryProduct
        breadcrumbs={[
          { item: "Anasayfa", link: "/", isCurrentPage: false },
          {
            item: "Elbise",
            isCurrentPage: true,
          },
        ]}
      />
    ),
  },
  /*{
    path: "//",
    element: (
      <CategoryProduct
        breadcrumbs={[
          { item: "Anasayfa", link: "/", isCurrentPage: false },
          {
            item: "",
            isCurrentPage: true,
          },
        ]}
      />
    ),
  },*/
];

const as = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/iletisim/",
        element: <Contact />,
      },
      {
        path: "/ara/",
        element: <CategoryProduct isSearchPage />,
      },
      {
        path: "/sepetim/",
        element: <Basket />,
      },
      ...categories,
    ],
  },
  {
    path: "/giris/",
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    ),
  },
  {
    path: "/uye-ol/",
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    ),
  },
  {
    path: "/admin/",
    element: <ProtectedRoute user={true} />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'admin/catalog/',
        element: <Dashboard />,
      },

      {
        path: 'admin/order/',
        element: <Dashboard />,
      },
      {
        path: 'admin/user/',
        element: <Dashboard />,
      },
      {
        path: 'admin/giris/',
        element: <UserLogin />,
      },
    ],
  },
];
export default as;

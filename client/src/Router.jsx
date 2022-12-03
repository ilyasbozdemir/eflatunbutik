import { Routes, Route } from "react-router-dom";
import React from "react";


import Favorite from "./pages/Favorite";
import Basket from "./pages/Basket";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Catalog from "./pages/Dashboard/Catalog";
import Order from "./pages/Dashboard/Order";
import User from "./pages/Dashboard/User";
import UserLogin from "./pages/Dashboard/UserLogin";

import RequireAuth from "../src/components/RequireAuth";

import CategoryProduct from "./pages/CategoryProduct";

const Home = React.lazy(() => import("./pages/Home"));
const Page404 = React.lazy(() => import("./pages/ErrorPage/Page404"));

function Router() {
  return (
    <>
      <Routes>
        <Route
          element={
            <RequireAuth allowedRoles={["ANONYMOUS", "USER", "ADMIN"]} />
          }
        >
          <Route exact path="/" element={<Home />} />
          <Route path="/iletisim" element={<Home />} />
          <Route
            path="/ara"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Ara",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/yeni-gelenler/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Yeni Gelenler",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/yeni-gelenler/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Yeni Gelenler",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route path="/elbise/" element={<Home />} />
          <Route path="/ust-giyim/" element={<Home />} />
          <Route path="/alt-giyim/" element={<Home />} />/
          <Route path="/ic-giyim/" element={<Home />} />
          <Route path="/dis-giyim/" element={<Home />} />
          <Route path="/outlet/" element={<Home />} />
          <Route path="/kombin/" element={<Home />} />
          <Route path="/indirim/" element={<Home />} />
          <Route path="/sepetim/" element={<Basket />} />
          <Route path="/giris/" element={<Login pathname="/giris/" />} />
          <Route path="/uye-ol/" element={<Login pathname="/uye-ol/" />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["USER"]} />}>
          <Route path="/favorilerim" element={<Favorite />} />
        </Route>
        <Route
          path="/admin/"
          exact
          element={<RequireAuth allowedRoles={["ADMIN"]} />}
        >
          <Route exact path="/admin/" element={<Dashboard />} />
          <Route path="/admin/catalog/" element={<Catalog />} />
          <Route path="/admin/order/" element={<Order />} />
          <Route path="/admin/user/" element={<User />} />
          <Route path="/admin/giris/" element={<UserLogin />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default Router;

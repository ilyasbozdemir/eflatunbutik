import { Routes, Route } from "react-router-dom";
import React from "react";
const Home = React.lazy(() => import("./pages/Home"));
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

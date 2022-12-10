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
const AuthLayout = React.lazy(() => import("./Layout/AuthLayout"));
const Layout = React.lazy(() => import("./Layout"));

const publicRoutes = ["/", "/yeni-gelenler/"];

function Router() {
  return (
    <>
      <Routes>
        <Route paths={publicRoutes}>
          <Route
            index
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/yeni-gelenler/"
            element={
              <Layout>
                <CategoryProduct
                  breadcrumbs={[
                    { item: "Anasayfa", link: "/", isCurrentPage: false },
                    {
                      item: "Yeni Gelenler",
                      isCurrentPage: true,
                    },
                  ]}
                />
              </Layout>
            }
          />
        </Route>

        <Route paths={["/giris/", "/uye-ol/"]} element={<AuthLayout />}>
          <Route path="/giris/" element={<Login pathname="/giris/" />} />
          <Route path="/uye-ol/" element={<Login pathname="/uye-ol/" />} />
        </Route>

        <Route
          path="/admin/"
          exact
          element={<RequireAuth allowedRoles={["ADMIN"]} />}
        >
          <Route exact path="/admin/" element={<Dashboard />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="order" element={<Order />} />
          <Route path="user" element={<User />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default Router;

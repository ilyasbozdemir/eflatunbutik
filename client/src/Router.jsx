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
          <Route path="/iletisim/" element={<Contact />} />
          <Route path="/ara" element={<CategoryProduct isSearchPage />} />
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
            path="/elbise/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Elbise",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/triko/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Triko",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/ust-giyim/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Üst Giyim",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/sweatshirt/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Üst Giyim",
                    link: "/ust-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Sweatshirt",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/tshirt/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Üst Giyim",
                    link: "/ust-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Tshirt",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/tunik/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Üst Giyim",
                    link: "/ust-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Tunik",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/gomlek/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Üst Giyim",
                    link: "/ust-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Gömlek",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/bluz/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Üst Giyim",
                    link: "/ust-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Bluz",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/alt-giyim/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Alt Giyim",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/etek/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Alt Giyim",
                    link: "/alt-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Etek",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/pantolon/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Alt Giyim",
                    link: "/alt-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Pantolon",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/pijama-takimi/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Alt Giyim",
                    link: "/alt-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Pijama Takımı",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/etek-takimi/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Alt Giyim",
                    link: "/alt-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Etek Takımı",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/ic-giyim/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "İç Giyim",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/dis-giyim/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Dış Giyim",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/yelek/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Dış Giyim",
                    link: "/dis-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Yelek",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/trenckot/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Dış Giyim",
                    link: "/dis-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Trençkot",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/kaban/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Dış Giyim",
                    link: "/dis-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Kaban",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/kap/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Dış Giyim",
                    link: "/dis-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Kap",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/yagmurluk/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Dış Giyim",
                    link: "/dis-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Yağmurluk",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/kazak/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Dış Giyim",
                    link: "/dis-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Kazak",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/takim/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Dış Giyim",
                    link: "/dis-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Takım",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/hirka/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Dış Giyim",
                    link: "/dis-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Hırka",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/suveter/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Dış Giyim",
                    link: "/dis-giyim/",
                    isCurrentPage: false,
                  },
                  {
                    item: "Süveter",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/outlet/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Outlet",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
          <Route
            path="/kombin/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "Kombin",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />{" "}
          <Route
            path="/indirim/"
            element={
              <CategoryProduct
                breadcrumbs={[
                  { item: "Anasayfa", link: "/", isCurrentPage: false },
                  {
                    item: "İndirim",
                    isCurrentPage: true,
                  },
                ]}
              />
            }
          />
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

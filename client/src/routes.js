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
  {
    path: "/ust-giyim/",
    element: (
      <CategoryProduct
        breadcrumbs={[
          { item: "Üst Giyim", link: "/", isCurrentPage: false },
          {
            item: "",
            isCurrentPage: true,
          },
        ]}
      />
    ),
  },
  {
    path: "/sweatshirt/",
    element: (
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
    ),
  },
  {
    path: "/tisort/",
    element: (
      <CategoryProduct
        breadcrumbs={[
          { item: "Anasayfa", link: "/", isCurrentPage: false },
          {
            item: "Üst Giyim",
            link: "/ust-giyim/",
            isCurrentPage: false,
          },
          {
            item: "Tişört",
            isCurrentPage: true,
          },
        ]}
      />
    ),
  },
  {
    path: "/tunik/",
    element: (
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
    ),
  },
  {
    path: "/gomlek/",
    element: (
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
    ),
  },
  {
    path: "/bluz/",
    element: (
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
    ),
  },
  {
    path: "/alt-giyim/",
    element: (
      <CategoryProduct
        breadcrumbs={[
          { item: "Anasayfa", link: "/", isCurrentPage: false },
          {
            item: "Alt Giyim",
            isCurrentPage: true,
          },
        ]}
      />
    ),
  },
  {
    path: "/etek/",
    element: (
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
    ),
  },
  {
    path: "/pantolon/",
    element: (
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
    ),
  },
  {
    path: "/pijama-takimi/",
    element: (
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
    ),
  },
  {
    path: "/etek-takimi/",
    element: (
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
    ),
  },
  {
    path: "/ic-giyim/",
    element: (
      <CategoryProduct
        breadcrumbs={[
          { item: "Anasayfa", link: "/", isCurrentPage: false },

          {
            item: "İç Giyim",
            isCurrentPage: true,
          },
        ]}
      />
    ),
  },
  {
    path: "/dis-giyim/",
    element: (
      <CategoryProduct
        breadcrumbs={[
          { item: "Anasayfa", link: "/", isCurrentPage: false },

          {
            item: "Dış Giyim",
            isCurrentPage: true,
          },
        ]}
      />
    ),
  },
  {
    path: "/yelek/",
    element: (
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
    ),
  },
  {
    path: "/trenckot/",
    element: (
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
    ),
  },
  {
    path: "/kaban/",
    element: (
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
    ),
  },
  {
    path: "/kap/",
    element: (
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
    ),
  },
  {
    path: "/yagmurluk/",
    element: (
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
    ),
  },
  {
    path: "/kazak/",
    element: (
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
    ),
  },
  {
    path: "/takim/",
    element: (
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
    ),
  },
  {
    path: "/hirka/",
    element: (
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
    ),
  },
  {
    path: "/suveter/",
    element: (
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
    ),
  },
  {
    path: "/outlet/",
    element: (
      <CategoryProduct
        breadcrumbs={[
          { item: "Anasayfa", link: "/", isCurrentPage: false },
          {
            item: "Outlet",
            isCurrentPage: true,
          },
        ]}
      />
    ),
  },
  {
    path: "/kombin/",
    element: (
      <CategoryProduct
        breadcrumbs={[
          { item: "Anasayfa", link: "/", isCurrentPage: false },
          {
            item: "Kombin",
            isCurrentPage: true,
          },
        ]}
      />
    ),
  },
  {
    path: "/pantolonlu-kombin/",
    element: (
      <CategoryProduct
        breadcrumbs={[
          { item: "Anasayfa", link: "/", isCurrentPage: false },
          { item: "Kombin", link: "/kombin/", isCurrentPage: false },
          {
            item: "Pantolonlu Kombin",
            isCurrentPage: true,
          },
        ]}
      />
    ),
  },
  {
    path: "/etekli-kombin/",
    element: (
      <CategoryProduct
      breadcrumbs={[
        { item: "Anasayfa", link: "/", isCurrentPage: false },
        { item: "Kombin", link: "/kombin/", isCurrentPage: false },
        {
          item: "Etekli Kombin",
          isCurrentPage: true,
        },
      ]}
      />
    ),
  },
  {
    path: "/indirim/",
    element: (
      <CategoryProduct
      breadcrumbs={[
        { item: "Anasayfa", link: "/", isCurrentPage: false },
        { item: "Kombin", link: "/kombin/", isCurrentPage: false },
        {
          item: "İndirimdekiler",
          isCurrentPage: true,
        },
      ]}
      />
    ),
  },
];

const router = [
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
      {
        path: "*",
        element: <Page404 />,
      },
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
        path: "admin/catalog/",
        element: <Dashboard />,
      },

      {
        path: "admin/order/",
        element: <Dashboard />,
      },
      {
        path: "admin/user/",
        element: <Dashboard />,
      },
      {
        path: "admin/giris/",
        element: <UserLogin />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
];
export default router;

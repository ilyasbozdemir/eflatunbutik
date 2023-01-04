import React from "react";
import ProtectedRoute from "../src/components/ProtectedRoute";
import ProductDetail from "./pages/ProductDetail";
import ProductAddress from "./pages/ProductAddress";
import ProductPayment from "./pages/ProductPayment";
import OrderCompleted from "./pages/OrderCompleted";

import MyAddressInformation from "./pages/User/MyAddressInformation";
import MyUserInformation from "./pages/User/MyUserInformation";
import MyRefundRequests from "./pages/User/MyRefundRequests";
import MyProductReviews from "./pages/User/MyProductReviews";

import OrderDetail from "./pages/OrderDetail";

import MyOrders from "./pages/User/MyOrders";
import UserWrapper from "./pages/User/UserWrapper";
import PasswordUpdate from "./pages/User/PasswordUpdate";

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
const HomeLayout = React.lazy(() => import("./Layout"));

const categories = [
  {
    path: "/cok-satanlar/",
    element: (
      <CategoryProduct
        breadcrumbs={[
          { item: "Anasayfa", link: "/", isCurrentPage: false },
          {
            item: "Çok Satanlar",
            isCurrentPage: true,
          },
        ]}
      />
    ),
  },
  {
    path: "/one-cikanlar/",
    element: (
      <CategoryProduct
        breadcrumbs={[
          { item: "Anasayfa", link: "/", isCurrentPage: false },
          {
            item: "Öne Çıkanlar",
            isCurrentPage: true,
          },
        ]}
      />
    ),
  },
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
    path: "*",
    element: (
      <AuthLayout>
        {/* AuthLayout boş bir layout vermesi adına  */}
        <Page404 to="/" from="index" />
      </AuthLayout>
    ),
  },

  {
    path: "/",
    element: <HomeLayout />,
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
      {
        path: "/p/:productId-:productDetail/",
        element: <ProductDetail />,
      },
      {
        path: "/siparis/adres/",
        element: <ProductAddress />,
      },
      {
        path: "/siparis/odeme/",
        element: <ProductPayment />,
      },
      {
        path: "/siparis/tamamlandi/:orderNumber",
        element: <OrderCompleted />,
      },

      {
        path: "/favorilerim/",
        element: (
          <>
            <Favorite />
          </>
        ),
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
    path: "/hesabim/",
    element: <ProtectedRoute user={true} isAdmin={true} />,
    children: [
      {
        index: true,
        element: (
          <HomeLayout>
            <UserWrapper pageName={"index"} children={<MyUserInformation />} />
          </HomeLayout>
        ),
      },
      {
        path: "/hesabim/adreslerim/",
        element: (
          <HomeLayout>
            <UserWrapper
              pageName={"adreslerim"}
              children={<MyAddressInformation />}
            />
          </HomeLayout>
        ),
      },
      {
        path: "/hesabim/siparislerim/",
        element: (
          <HomeLayout>
            <UserWrapper pageName={"siparislerim"} children={<MyOrders />} />
          </HomeLayout>
        ),
      },
      {
        path: "/hesabim/iade-taleplerim/",
        element: (
          <HomeLayout>
            <UserWrapper
              pageName={"iade-taleplerim"}
              children={<MyRefundRequests />}
            />
          </HomeLayout>
        ),
      },
      {
        path: "/hesabim/sifre-guncelleme/",
        element: (
          <HomeLayout>
            <UserWrapper
              pageName={"sifre-guncelleme"}
              children={<PasswordUpdate />}
            />
          </HomeLayout>
        ),
      },
      {
        path: "/hesabim/urun-yorumlarim/",
        element: (
          <HomeLayout>
            <UserWrapper
              pageName={"urun-yorumlarim"}
              children={<MyProductReviews />}
            />
          </HomeLayout>
        ),
      },
      {
        path: "/hesabim/siparis/:generalOrderNumber/",
        element: (
          <HomeLayout>
            <OrderDetail />
          </HomeLayout>
        ),
      },

      {
        path: "/hesabim/cikis/",
        element: (
          <>
            <UserWrapper pageName={"cikis"} />
          </>
        ),
      },
      {
        path: "*",
        element: <Page404 to="/" from="hesabim" />,
      },
    ],
  },
  {
    path: "/admin/",
    element: <ProtectedRoute user={false} isAdmin={true} />,
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
        element: <Page404 to="/" from="admin" />,
      },
    ],
  },
];
export default router;

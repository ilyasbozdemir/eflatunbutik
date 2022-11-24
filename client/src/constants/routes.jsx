import { MdOutlineFiberNew } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { CiDiscount1 } from "react-icons/ci";

import Page404 from "../../src/pages/ErrorPage/Page404";

import Home from "../../src/pages/Home";

export const routes = [
  {
    path: "*",
    exact: true,
    element: <Page404 />,
  },
  {
    path: "/",
    exact: true,
    element: <Home />,
  }
];


  
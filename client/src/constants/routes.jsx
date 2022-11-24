import Page404 from "../../src/pages/ErrorPage/Page404";

import Home from "../../src/pages/Home";
import Login from "../../src/pages/Login";

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

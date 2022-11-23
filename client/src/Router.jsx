import { Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import Page404 from "./pages/ErrorPage/Page404";


const routes = [
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

function Router() {
  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </>
  );
}

export default Router;

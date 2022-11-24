import { Routes, Route } from "react-router-dom";
import React from "react";

import {routes} from '../src/constants/routes'

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

import { Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import Page404 from "./pages/ErrorPage/Page404";
import Favorite from "./pages/Favorite";
import Basket from "./pages/Basket";
import Login from "./pages/Login";



function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sepetim" element={<Basket />} />
        <Route path="/favorilerim" element={<Favorite />} />
        <Route path="/iletisim" element={<Home />} />
        <Route path="/sepetim/" element={<Basket />} />
        <Route path="/yeni-gelenler/" element={<Home />} />
        <Route path="/elbise/" element={<Home />} />
        <Route path="/ust-giyim/" element={<Home />} />
        <Route path="/alt-giyim/" element={<Home />} />/
        <Route path="/ic-giyim/" element={<Home />} />
        <Route path="/dis-giyim/" element={<Home />} />
        <Route path="/outlet/" element={<Home />} />
        <Route path="/kombin/" element={<Home />} />
        <Route path="/indirim/" element={<Home />} />
        <Route path="/giris/" element={<Login pathname='/giris/' />} />
        <Route path="/uye-ol/" element={<Login pathname='/uye-ol/' />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default Router;

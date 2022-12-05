import React from "react";

import ProductCategory from "../components/ProductCategory/FilterProductCategory";

function CategoryProduct(props) {
  const { breadcrumbs, categoryData } = props;

  return (
    <>
      <ProductCategory></ProductCategory>
    </>
  );
}

export default CategoryProduct;

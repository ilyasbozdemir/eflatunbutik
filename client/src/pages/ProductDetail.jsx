import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  //alert(params.productDetail, params.productId);

  return <div>ProductDetail</div>;
}

export default ProductDetail;

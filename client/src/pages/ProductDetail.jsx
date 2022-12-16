import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  //alert(params.productDetail, params.productId);
  if (5 === 5)
    //geçerli bir ürün ve ürün adıysa
    return <div>ProductDetail</div>;
  else return <div>NotFound</div>;
}

export default ProductDetail;

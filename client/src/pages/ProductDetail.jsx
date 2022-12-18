import { Box, Button, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  const [isProduct, setIsProduct] = React.useState(true);
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  //alert(params.productDetail, params.productId);

  if (isProduct)
    //geçerli bir ürün ve ürün adıysa

    return (
      <>
        {isDesktop === true ? (
          <Box id="product-container">
            <Box id="container-left-content">
              <Box id="gallery-container">desktop</Box>
            </Box>
            <Box id="container-right-content"></Box>
          </Box>
        ) : (
          <Box id="product-container">
            <Box id="container-left-content">
              <Box id="gallery-container">mobile</Box>
            </Box>
            <Box id="container-right-content"></Box>
          </Box>
        )}
      </>
    );
  else return <div>NotFound</div>;
}

export default ProductDetail;

import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  const [isProduct, setIsProduct] = React.useState(true);

  //alert(params.productDetail, params.productId);

  if (isProduct)
    //geçerli bir ürün ve ürün adıysa

    return (
      <>
        <Button
          onClick={async () => {
            try {
              const shareData = {
                title: 'MDN',
                text: 'Learn web development on MDN!',
                url: 'https://developer.mozilla.org'
              }
              await navigator.share(shareData);
            } catch (err) {

            }
          }}
        >
          Tıkla
        </Button>

        <Box id="product-container">
          <Box id="container-left-content">
            <Box id="gallery-container"></Box>
          </Box>
          <Box id="container-right-content"></Box>
        </Box>
      </>
    );
  else return <div>NotFound</div>;
}

export default ProductDetail;

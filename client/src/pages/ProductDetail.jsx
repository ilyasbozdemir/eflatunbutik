import {
  AspectRatio,
  Box,
  Image,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";

import ChakraCarousel from "../../src/components/ChakraCarousel";

import React from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  Tag,
} from "@chakra-ui/react";
import { capsFirst } from "../../src/utils";

function ProductDetail() {
  const params = useParams();
  const [isProduct, setIsProduct] = React.useState(true);
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  //alert(params.productDetail, params.productId);

  //
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  //

  if (isProduct)
    //geçerli bir ürün ve ürün adıysa

    return (
      <Stack pos={"relative"} zIndex={150} w={"full"} wh={"full"}>
        <>Breadcrumb</>
        {isDesktop === true ? (
          <Box id="product-container">
            <Box id="container-left-content">
              <Box id="gallery-container" mt={5} ml={10} w={480} h={640}>
                <ChakraCarousel gap={32}>
                  {data.slice(1, 15).map((post, index) => (
                    <Image
                      draggable={false}
                      alt="test"
                      src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=434&q=80https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=434&q=80"
                    />
                  ))}
                </ChakraCarousel>
              </Box>
            </Box>
            <Box id="container-right-content"></Box>
          </Box>
        ) : (
          <>mobile</>
        )}
      </Stack>
    );
  else return <div>NotFound</div>;
}

export default ProductDetail;

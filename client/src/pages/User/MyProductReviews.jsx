import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
function MyProductReviews() {
  const [productReviews, setProductReviews] = React.useState([]);
  return (
    <>
      {productReviews.length > 0 ? (
        productReviews.map((productReview, index) => <></>)
      ) : (
        <Flex textAlign={"center"} p={3} direction={"column"}>
          <Text>Kayıt Bulunamadı!</Text>
        </Flex>
      )}
    </>
  );
}

export default MyProductReviews;

import { Box, Flex, Grid, GridItem, HStack, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import EmptyBasket from "./EmptyBasket";
import Basket from "./Basket";

function CardWrapper() {
  const [count, setCount] = useState(1);

  return (
    <>
      <Flex direction={"column"} textAlign={"center"} px={3} py={3}>
        {count > 0 ? <Basket /> : <EmptyBasket />}
        <Box>{"{En Çok Satanlar componenti gelcek}"}</Box>
      </Flex>
    </>
  );
}

export default CardWrapper;

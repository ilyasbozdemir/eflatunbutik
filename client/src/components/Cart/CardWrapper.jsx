import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import EmptyBasket from "./EmptyBasket";
import Basket from "./Basket";
import { MainContext, useContext } from "../../contexts/MainContext";

function CardWrapper() {
  const { basket } = useContext(MainContext);

  return (
    <>
      <Flex direction={"column"} textAlign={"center"} px={3} py={3}>
        {basket.length > 0 ? <Basket /> : <EmptyBasket />}
      </Flex>
    </>
  );
}

export default CardWrapper;

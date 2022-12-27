import React from "react";
import { Text } from "@chakra-ui/react";

import { FormControl, FormLabel } from "@chakra-ui/react";

import { Switch } from "@chakra-ui/react";

const DiscountInCart = () => {
  return (
    <Text fontWeight={"semibold"}>
      <FormControl display="flex" alignItems="center">
        <Switch id="campaign-products" colorScheme="pink" />{" "}
        <FormLabel userSelect={"none"} htmlFor="campaign-products" mb="0">
          Sepette İndirim
        </FormLabel>
      </FormControl>
    </Text>
  );
};

export default DiscountInCart;

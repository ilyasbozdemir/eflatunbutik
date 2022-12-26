import React from "react";
import { Text } from "@chakra-ui/react";

import { FormControl, FormLabel } from "@chakra-ui/react";

import { Switch } from "@chakra-ui/react";

const DiscountInCart = () => {
  return (
    <Text fontWeight={"semibold"} as="h4">
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="campaign-products" mb="0">
          Sepette Kampanya
        </FormLabel>
        <Switch id="campaign-products" colorScheme="pink" />
      </FormControl>
    </Text>
  );
};

export default DiscountInCart;

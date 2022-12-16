import React from "react";
import { Text } from "@chakra-ui/react";

import { FormControl, FormLabel } from "@chakra-ui/react";

import { Switch } from "@chakra-ui/react";

const CategoryName = ({ name }) => {
  return (
    <>
      <Text fontWeight={"semibold"}>{name}</Text>
    </>
  );
};

const CouponProduct = () => {
  return (
    <Text fontWeight={"semibold"} as="h4">
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="coupon-products" mb="0">
          Kuponlu Ürünler
        </FormLabel>
        <Switch id="coupon-products" colorScheme="pink" />
      </FormControl>
    </Text>
  );
};
export default CouponProduct;

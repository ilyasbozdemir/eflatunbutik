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
    <Text >
      <FormControl display="flex" alignItems="center">
        <Switch id="coupon-products" colorScheme="pink" />
        <FormLabel htmlFor="coupon-products"  userSelect={'none'}>
          Kuponlu Ürünler
        </FormLabel>
      </FormControl>
    </Text>
  );
};
export default CouponProduct;

import React from "react";
import {
  Text,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
} from "@chakra-ui/react";

import { FormControl, FormLabel } from "@chakra-ui/react";

import { Switch } from "@chakra-ui/react";

const CategoryName = ({ name }) => {
  return (
    <>
      <Text fontWeight={"semibold"}>{name}</Text>
    </>
  );
};

const DiscountedProduct = () => {
  return (
    <Text fontWeight={"semibold"}>
      <FormControl display="flex" alignItems="center">
        <Switch id="discount-products" colorScheme="pink" />
        <FormLabel  userSelect={'none'} htmlFor="discount-products" mb="0">
          İndirimli Ürünler
        </FormLabel>
      </FormControl>
    </Text>
  );
};
export default DiscountedProduct;

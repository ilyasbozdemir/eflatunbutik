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
    <Text fontWeight={"semibold"} as="h4">
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="discount-products" mb="0">
          İndirimli Ürünler
        </FormLabel>
        <Switch id="discount-products" colorScheme="pink" />
      </FormControl>
    </Text>
  );
};
export default DiscountedProduct
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

import { Box } from "@chakra-ui/react";

import PriceRange from "./Filter/PriceRange";
import Categories from "./Filter/Categories";
import EvaluationScore from "./Filter/EvaluationScore";
import Colors from "./Filter/Colors";
import BodySize from "./Filter/BodySize";
import CouponProduct from "./Filter/CouponProduct";
import DiscountedProduct from "./Filter/DiscountedProduct";
import DiscountInCart from "./Filter/DiscountInCart";

const SidebarContent = (props) => {
  const { onClick, ...rest } = props;

  return (
    <>
      <Box {...rest}>
        <VStack my={3}>
          <Categories />
          <PriceRange prices={{ minPrice: 125, maxPrice: 300 }} />
          <EvaluationScore />
          <BodySize />
          <Colors
            colors={["black", "white", "blue", "red", "green", "yellow"]}
          />
          <CouponProduct />
          <DiscountedProduct />
          <DiscountInCart />
        </VStack>
      </Box>
    </>
  );
};

const Sidebar = ({ isOpen, variant, onClose }) => {
  return variant === "sidebar" ? (
    <Box
      overflowY={"auto"}
      w="200px"
      minW={'200px'}
      h={"container.md"}
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '5px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#FF0080',
          borderRadius: '12px',
        },
      }}
    >
      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="bottom" size={"sm"} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>
            <Text fontSize={"xl"}>Filtrele</Text>
          </DrawerHeader>

          <DrawerBody>
            {/* <SidebarContent onClick={onClose} /> */}
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;

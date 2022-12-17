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

import { Icon, Stack, FormControl, FormLabel, Box } from "@chakra-ui/react";

import { AiFillStar } from "react-icons/ai";

import { Radio, RadioGroup } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";

import { linkItems } from "../../constants/LinkItems";
import { Link, useLocation } from "react-router-dom";

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
        <VStack>
          <Categories />
          <PriceRange />
          <EvaluationScore />
          <BodySize />
          <Colors />
          <CouponProduct />
          <DiscountedProduct />
          <DiscountInCart />
        </VStack>
      </Box>
    </>
  );
};

const Sidebar = ({ isOpen, variant, onClose }) => {
  const borderVariant = {
    css: {
      borderRadius: "10px 10px",
      border: "1px solid",
    },
  };
  return variant === "sidebar" ? (
    <Box overflow={"auto"} w="200px" h={"100%"} {...borderVariant}>
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
            (Mobile Filter Content)
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;

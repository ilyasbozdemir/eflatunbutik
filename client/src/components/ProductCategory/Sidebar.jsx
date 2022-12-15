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

import PriceRange from './Filter/PriceRange'
import Categories from './Filter/Categories'
import EvaluationScore from './Filter/EvaluationScore'

const SidebarContent = (props) => {

  const { onClick, ...rest } = props;

  const CategoryName = ({ name }) => {
    return (
      <>
        <Text fontWeight={"semibold"}>{name}</Text>
      </>
    );
  };

  const BodySize = () => {
    return (
      <>
        <CategoryName name={"Beden"} />
        <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="row" w={"90%"}>
            <Radio colorScheme="pink" value="1">
              36
            </Radio>
            <Radio colorScheme="pink" value="2">
              38
            </Radio>
            <Radio colorScheme="pink" value="3">
              40
            </Radio>
            <Radio colorScheme="pink" value="4">
              42
            </Radio>
            <Radio colorScheme="pink" value="5">
              44
            </Radio>
            <Radio colorScheme="pink" value="6">
              46
            </Radio>
            <Radio colorScheme="pink" value="7">
              48
            </Radio>
          </Stack>
        </RadioGroup>
      </>
    );
  };

  const Colors = () => {
    return (
      <>
        <CategoryName name={"Renkler"} />

        <CheckboxGroup>
          <Stack spacing={[1]} direction={["row"]}>
            <Checkbox size="md" value="Siyah">
              <Flex textAlign={"center"} ml={1}>
                <Box
                  w={5}
                  h={5}
                  borderRadius={"50% 50%"}
                  bg={"black"}
                  border={"1px #000 solid"}
                  mr={1}
                />
              </Flex>
            </Checkbox>
            <Checkbox size="md" value="Beyaz">
              <Flex textAlign={"center"} ml={1}>
                <Box
                  w={5}
                  h={5}
                  borderRadius={"50% 50%"}
                  bg={"white"}
                  border={"1px #000 solid"}
                  mr={1}
                />
              </Flex>
            </Checkbox>
            <Checkbox size="md" value="Yeşil">
              <Flex textAlign={"center"} ml={1}>
                <Box
                  w={5}
                  h={5}
                  borderRadius={"50% 50%"}
                  bg={"green"}
                  border={"1px #000 solid"}
                  mr={1}
                />
              </Flex>
            </Checkbox>
            <Checkbox size="md" value="Kırmızı">
              <Flex textAlign={"center"} ml={1}>
                <Box
                  w={5}
                  h={5}
                  borderRadius={"50% 50%"}
                  bg={"red"}
                  border={"1px #000 solid"}
                  mr={1}
                />
              </Flex>
            </Checkbox>
            <Checkbox size="md" value="Mavi">
              <Flex textAlign={"center"} ml={1}>
                <Box
                  w={5}
                  h={5}
                  borderRadius={"50% 50%"}
                  bg={"blue"}
                  border={"1px #000 solid"}
                  mr={1}
                />
              </Flex>
            </Checkbox>
          </Stack>
        </CheckboxGroup>
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
  const DiscountInCart = () => {
    return (
      <Text fontWeight={"semibold"} as="h4">
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="campaign-products" mb="0">
            Sepette Kampanyalı Ürünler
          </FormLabel>
          <Switch id="campaign-products" colorScheme="pink" />
        </FormControl>
      </Text>
    );
  };

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

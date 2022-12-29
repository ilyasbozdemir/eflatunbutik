import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  useDisclosure as UseDisclosure,
  Icon,
  Stack,
} from "@chakra-ui/react";

import Logo from "../Logo";

import { MdOutlineFavoriteBorder } from "react-icons/md";

import { MdOutlineShoppingCart } from "react-icons/md";

import SearchBox from "./SearchBox";

import { Link } from "react-router-dom";

import { MainContext, useContext } from "../../../src/contexts/MainContext";

import UserMenu from "./UserMenu";
function HeaderBrand() {
  const { isOpen, onOpen, onClose } = UseDisclosure();
 
  const { basket, wishlist } = useContext(MainContext);

  return (
    <>
      <Flex justifyContent={"space-between"} mt={5} mb={2}>
        <Heading size="md">
          <Link to="/">
            <Logo />
          </Link>
        </Heading>

        <Box borderRadius={"50px 50px 50px 50px"}>
          <SearchBox />
        </Box>

        <Box>
          <UserMenu
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            fontSize={31}
          />

          <Link
            to="/favorilerim/"
            bg={"transparent"}
            aria-label="product favorite"
            mx={1}
            pl={2}
            pos={"relative"}
          >
            <Icon as={MdOutlineFavoriteBorder} fontSize={31} />
            <Box
              as={"span"}
              bg={"#a020f0"}
              color={"white"}
              pos={"absolute"}
              top={9}
              right={8}
              fontSize={12}
              h={4}
              w={4}
              rounded={"full"}
              textAlign={"center"}
            >
              {wishlist.length}
            </Box>
          </Link>

          <Link
            bg={"transparent"}
            aria-label="product basket button"
            to="/sepetim/"
            mx={1}
            ml={4}
            pos={"relative"}
          >
            <Icon as={MdOutlineShoppingCart} fontSize={31} />
            <Box
              as={"span"}
              bg={"#a020f0"}
              color={"white"}
              pos={"absolute"}
              top={9}
              right={0}
              fontSize={12}
              h={4}
              w={4}
              rounded={"full"}
              textAlign={"center"}
            >
              {basket.length}
            </Box>
          </Link>
        </Box>
      </Flex>
    </>
  );
}

export default HeaderBrand;

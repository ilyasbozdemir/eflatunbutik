import React, { useState as UseState } from "react";
import { AiOutlineHome, AiOutlineSearch, AiOutlineStar } from "react-icons/ai";

import {
  Box,
  Flex,
  Icon,
  Tooltip,
  useDisclosure as UseDisclosure,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import UserMenu from "../Header/UserMenu";

const navs = [
  {
    to: "/",
    icon: AiOutlineHome,
    label: "anasayfa",
  },
  {
    to: "/sepetim",
    icon: AiOutlineShoppingCart,
    label: "sepetim",
  },
  {
    to: "/favorilerim",
    icon: AiOutlineStar,
    label: "favorilerim",
  },
  {
    label: "hesabım",
  },
];

function index() {
  const [isLogin, setIsLogin] = UseState(false);
  const { isOpen, onOpen, onClose } = UseDisclosure();

  return (
    <>
      <Flex justifyContent={"center"} direction={"row"}>
        <Box
          zIndex={1000}
          height={50}
          minW="100%"
          position="fixed"
          bottom={1}
          borderRadius={"10px 10px 10px 10px"}
          bgGradient="linear(to-r, #3A1C71, #CB356B, #BD3F32)"
          textAlign={"center"}
          boxShadow="xs"
          rounded="md"
        >
          <Flex
            direction={"row"}
            justifyContent={"space-between"}
            textAlign={"center"}
            mx={5}
            my={3}
          >
            {navs.map((nav, i) => (
              <Tooltip key={i} label={nav.label}>
                {nav.label === "hesabım" ? (
                  <UserMenu
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                    color={"#fff"}
                    bg={"transparent"}
                    _hover={{ bg: "transparent", color: "gray.500" }}
                  />
                ) : (
                  <Link to={nav.to}>
                    <Icon
                      color={"#fff"}
                      as={nav.icon}
                      w={6}
                      h={6}
                      _hover={{ color: "gray.500" }}
                    />
                  </Link>
                )}
              </Tooltip>
            ))}
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default index;

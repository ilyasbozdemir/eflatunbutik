import React from "react";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineStar,
  AiOutlineUser,
} from "react-icons/ai";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  VStack,
  Text,
  Icon,
  Tooltip,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

function index() {
  const navs = [
    {
      to: "/",
      icon: AiOutlineHome,
      label: "anasayfa",
    },
    {
      to: "/ara",
      icon: AiOutlineSearch,
      label: "ara",
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
      to: "/hesabim",
      icon: AiOutlineUser,
      label: "hesabım",
    },
  ];
  return (
    <>
      <Flex justifyContent={"center"} direction={"row"}>
        <Box
          color="white"
          zIndex={1000}
          height={50}
          minW="95%"
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
                <Link to={nav.to}>
                  <Icon
                    as={nav.icon}
                    w={6}
                    h={6}
                    _hover={{ color: "gray.500" }}
                  />
                </Link>
              </Tooltip>
            ))}
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default index;

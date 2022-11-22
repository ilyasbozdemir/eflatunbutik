import React from "react";

import {
  Box,
  CloseButton,
  Flex,
  Text,
  useMediaQuery as UseMediaQuery,
} from "@chakra-ui/react";

import Logo from "../Logo";

import NavLink from "./NavLink";

import { linkItems } from "../../LinkItems";
import { Link } from "react-router-dom";

function index({ onClose, ...rest }) {
  
  const [isDesktop] = UseMediaQuery("(min-width: 768px)");


  return (
    <>
      <Box
        transition={{ base: "3s ease" }}
        bg="white"
        borderRight="1px"
        borderRightColor="gray.200"
        w="full"
        pos="fixed"
        h="full"
        style={{ overflowY: "auto" }}
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            <Link to="/">
              <Logo />
            </Link>
          </Text>
          <CloseButton
            display={{ base: "flex", md: "flex" }}
            onClick={onClose}
          />
        </Flex>
        {linkItems.map((link, i) => (
          <NavLink key={i} link={link} />
        ))}
      </Box>

      {isDesktop ? onClose() : ""}
    </>
  );
}

export default index;

import React from "react";
import {
  useDisclosure as UseDisclosure,
  useColorModeValue as UseColorModeValue,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";

import { Link, useNavigate as UseNavigate } from "react-router-dom";

function index({ link }) {
  const { isOpen, onOpen, onClose } = UseDisclosure();
  const { label, href, icon, childrens } = link;

  const navigate = UseNavigate();

  return (
    <>
      <Menu isOpen={isOpen} pos={"relative"}>
        <MenuButton
          mx={1}
          py={[1, 2, 2]}
          px={4}
          borderRadius={5}
          _hover={{
            borderBottom: "solid",
            borderBottomColor: "#7928CA",
            color: "#7928CA",
          }}
          aria-label={{ label } + " button"}
          fontWeight="normal"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          onClick={() => navigate(href)}
        >
          {label}
        </MenuButton>
        {childrens.length !== 0 ? (
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            {childrens.map((link, i) => (
              <Link to={link.href}>
                <MenuItem
                  key={i}
                  link={link}
                  _hover={{
                    bg: UseColorModeValue("gray.100", "gray.700"),
                    color: "#fff",
                    bgGradient: "linear(to-l, #7928CA, #FF0080)",
                  }}
                >
                  <Text as={"span"} userSelect={"none"}>
                    {link.label}
                  </Text>
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        ) : (
          ""
        )}
      </Menu>
    </>
  );
}

export default index;

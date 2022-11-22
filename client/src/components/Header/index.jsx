import React from "react";
import { FiMenu } from "react-icons/fi";
import {
  IconButton,
  Flex,
  Stack,
  Text,
  Box,
  Spacer,
  useDisclosure as UseDisclosure,
  useColorModeValue as UseColorModeValue,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Logo from "../Logo";

import HeaderTop from "./HeaderTop";
import HeaderBrand from "./HeaderBrand";
import HeaderMenu from "./HeaderMenu";

import SettingSidebar from "../../components/SettingSidebar";
import SettingSidebarButton from "../../components/SettingSidebar/SettingSidebarButton";

import BottomNavigation from "../../components/BottomNavigation";

function index({ onOpen, ...rest }) {
  const {
    isOpen: isOpenSettingSidebar,
    onOpen: onOpenSettingSidebar,
    onClose: onCloseSettingSidebar,
  } = UseDisclosure();

  
  return (
    <>
      <Flex
        position="sticky"
        top="0"
        zIndex="1000"
        alignItems="center"
        justifyContent={{ base: "flex-start", md: "flex-end" }}
        bg={UseColorModeValue("white", "blackAlpha.50")}
        /*  backdropFilter="blur(1.5rem)"*/
        {...rest}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />

        <Text
          as="div"
          display={{ base: "flex", md: "none" }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          <Link to="/">
            <Logo />
          </Link>
        </Text>
        <Spacer />

        {/*settings component*/}
        <Box display={{ base: "block", md: "block",lg:'none' }}>
         <SettingSidebarButton onOpen={onOpenSettingSidebar} />
        </Box>

         
        

        <SettingSidebar
          onOpen={onOpenSettingSidebar}
          isOpen={isOpenSettingSidebar}
          onClose={onCloseSettingSidebar}
        />
        {/**/}

        <Stack display={{ base: "none", md: "flex" }} w={"100%"}>
          <HeaderTop />
          <HeaderBrand />
          <HeaderMenu />
        </Stack>
      </Flex>

      {/*= Mobile Bottom Navigation =*/}
      <Box display={{ base: "block", md: "none" }}>
        <BottomNavigation />
      </Box>
    </>
  );
}

export default React.memo(index);

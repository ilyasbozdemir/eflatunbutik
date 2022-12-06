import React from "react";
import { FiMenu } from "react-icons/fi";
import {
  IconButton,
  Stack,
  Text,
  Box,
  Flex,
  Spacer,
  Divider,
  useDisclosure as UseDisclosure,
  useColorModeValue as UseColorModeValue,
  useBreakpointValue as UseBreakpointValue,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Logo from "../Logo";

import HeaderTop from "./HeaderTop";
import HeaderBrand from "./HeaderBrand";
import HeaderMenu from "./HeaderMenu";
import SearchBox from "./SearchBox";

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
      <Box
        as="header"
        display={"flex"}
        position="sticky"
        top="0"
        zIndex="1000"
        alignItems="center"
        bg={UseColorModeValue("white", "blackAlpha.50")}
        boxShadow={
          "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"
        }
        {...rest}
      >
        <Flex
          direction={"column"}
          alignItems="center"
          justifyContent={{ base: "space-between", md: "flex-end" }}
        
        >
          <Box display={"flex"} bg={"yellow.400"}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
              variant="ghost"
              aria-label="open menu"
              icon={<FiMenu />}
              bg="transparent"
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
            <Box display={{ base: "block", md: "block", lg: "none" }}>
              <SettingSidebarButton onOpen={onOpenSettingSidebar} />
            </Box>
            <Spacer />
            <SettingSidebar
              onOpen={onOpenSettingSidebar}
              isOpen={isOpenSettingSidebar}
              onClose={onCloseSettingSidebar}
            />
          </Box>

          <Box display={{ base: "block", md: "none" }}>
            <SearchBox />
          </Box>
        </Flex>

        <Stack display={{ base: "none", md: "flex" }} w={"100%"}>
          <HeaderTop />
          <Divider />
          <HeaderBrand />
          <HeaderMenu />
        </Stack>
      </Box>

      {/*= Mobile Bottom Navigation =*/}
      <Box
        display={{ base: "block", md: "none" }}
        boxShadow={
          " rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"
        }
      >
        <BottomNavigation />
      </Box>
    </>
  );
}

export default React.memo(index);

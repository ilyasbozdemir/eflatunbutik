import React from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure as UseDisclosure,
} from "@chakra-ui/react";

function index({ children }) {
  const { isOpen, onOpen, onClose } = UseDisclosure();

  return (
    <Box minH="100vh" zIndex='100'>
      <Sidebar onClose={() => onClose} display={{ base: "none", md: "none" }} />
      <Drawer
        autoFocus={true}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/*= Header =*/}
      <Header onOpen={onOpen} />

      <Box>
        {/*= add children components =*/}
        {children}
      </Box>
    </Box>
  );
}

export default index;

import React from "react";
import {
  Text,
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  Collapse,
} from "@chakra-ui/react";
import Logo from "../Logo";

const SidebarContent = (props) => {
  const { onClick, ...rest } = props;

  return (
    <>
      <Box {...rest}>
        [Kategori
        <br />
        fiyat aralığı
        <br />
        değerlendirme puanı <br />
        kuponlu ürünler
        <br />
        beden
        <br />
        renk
        <br />
        sepette indirim]
        <br />
      </Box>
    </>
  );
};

const Sidebar = ({ isOpen, variant, onClose }) => {
  return variant === "sidebar" ? (
    <Box p={5} w="200px" h={"100%"} bg={"gray.400"} borderRadius={"10px 10px"}>
      <SidebarContent onClick={onClose} color={"white"} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="bottom" size={"full"} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo />
          </DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;

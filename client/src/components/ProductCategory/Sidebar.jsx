import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
} from "@chakra-ui/react";
import Logo from "../Logo";

const SidebarContent = (props) => {
  const { onClick, ...rest } = props;

  return (
    <VStack>
      <Box w="100%" onClick={onClick} {...rest}>
        {"{Product Filter Content}"}
      </Box>
    </VStack>
  );
};

const Sidebar = ({ isOpen, variant, onClose }) => {
  return variant === "sidebar" ? (
    <Box
      p={5}
      w="200px"
      top={0}
      h={"100%"}
      bg={"gray.500"}
      borderRadius={"10px 10px"}
    >
      <SidebarContent onClick={onClose} color={"white"} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
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

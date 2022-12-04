import Header from "../Dashboard/Header";
import Sidebar from "../Dashboard/Sidebar";

import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";

export default function Layout({ children }) {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {isOpen & isDesktop ? onClose() : ""}

      <Box minH="100vh">
        <Sidebar
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
          boxShadow={
          `rgba(0, 0, 0, 0.25) 0px 54px 55px,
           rgba(0, 0, 0, 0.12) 0px -12px 30px,
           rgba(0, 0, 0, 0.12) 0px 4px 6px,
           rgba(0, 0, 0, 0.17) 0px 12px 13px`}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="sm"
        >
          <DrawerContent>
            <Sidebar onClose={onClose} />
          </DrawerContent>
        </Drawer>

        {/*= Header =*/}
        <Header onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {children}
        </Box>
      </Box>
    </>
  );
}

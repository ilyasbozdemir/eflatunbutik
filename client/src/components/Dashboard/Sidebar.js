import { useEffect } from "react";

import { Box, CloseButton, Flex, Text } from "@chakra-ui/react";

import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";

import { GrCatalogOption } from "react-icons/gr";
import NavLink from "./NavLink";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbPlugConnected } from "react-icons/tb";
import Logo from "../Logo";
const LinkItems = [
  { label: "Yönetim Paneli", icon: FiHome, href: "/" },
  { label: "Katalog", icon: GrCatalogOption, href: "/" },
  { label: "Siparişler", icon: AiOutlineShoppingCart, href: "/" },
  { label: "Eklentiler", icon: TbPlugConnected, href: "/" },
  //{ label: "Favourites", icon: FiStar, href: "/" },
  { label: "Ayarlar", icon: FiSettings, href: "/" },
];

export default function Sidebar({ onClose, ...rest }) {
  /*

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);
    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, [router.events, onClose]);
*/

  return (
    <Box
      transition="3s ease"
      bg="white"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Logo />
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, i) => (
        <NavLink key={i} link={link} />
      ))}
    </Box>
  );
}

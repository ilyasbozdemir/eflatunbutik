import { IconButton, Flex, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import UserProfile from "./UserProfile";
import { Link } from "react-router-dom";
import Logo from "../Logo";
export default function Header({ onOpen, ...rest }) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px="4"
      position="sticky"
      top="0"
      height="20"
      zIndex="1"
      alignItems="center"
      bg="white"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      boxShadow=
      {
        `rgba(0, 0, 0, 0.3) 19px 0px 20px`
      }
      
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="ghost"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize={{ base: "xl", md: "2xl" }}
        fontFamily="monospace"
        fontWeight="bold"
      >
        <Link to ='/admin/'>
          <Logo />
        </Link>
      </Text>

      <UserProfile />
    </Flex>
  );
}

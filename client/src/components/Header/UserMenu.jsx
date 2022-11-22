import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Icon,
  useColorModeValue as UseColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

function UserMenu({ isOpen, onOpen, onClose }) {
  const userRef = React.useRef();
  return (
    <>

      <Menu isOpen={isOpen}>
        <MenuButton
          ref={userRef}
          mx={1}
          py={[1, 2, 2]}
          px={4}
          borderRadius={5}
          _hover={{ bg: UseColorModeValue("gray.100", "gray.700") }}
          aria-label={"user button"}
          fontWeight="normal"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <HStack>
            <Icon as={AiOutlineUser} fontSize={25} />
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </HStack>
        </MenuButton>

        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          <Link to="/giris">
            <MenuItem>Giriş Yap</MenuItem>
          </Link>
          <Link to="/uyelik">
            <MenuItem>Üye Ol</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      
    </>
  );
}

export default UserMenu;

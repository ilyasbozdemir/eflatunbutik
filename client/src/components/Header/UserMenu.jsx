import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  HStack,
  Icon,
  Text,
  Flex,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

function UserMenu(props) {
  const { isOpen, onOpen, onClose, ...rest } = props;

  const [isLogin, setIsLogin] = React.useState(true);
  const [isAdmin, setIsAdmin] = React.useState(true);

  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton
          borderRadius={5}
          aria-label={"user button"}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          bg={"transparent"}
        >
          <HStack>
            <Icon as={AiOutlineUser} {...rest} />
          </HStack>
        </MenuButton>

        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          <>
            {isLogin === false
              ? menuAnon.map((menu, index) => (
                  <>
                    <ItemMenu key={'menuAnon_'+index} {...menu} />
                  </>
                ))
              : menuUser.map((menu, index) => (
                  <>
                    <ItemMenu key={'menuUser'+index} {...menu} />
                    <MenuDivider />
                  </>
                ))}

            {isAdmin === true
              ? menuAdmin.map((menu, index) => (
                  <>
                    <ItemMenu key={'menuAdmin'+index} {...menu} />
                  </>
                ))
              : ""}
          </>
        </MenuList>
      </Menu>
    </>
  );
}

const menuAnon = [
  {
    title: "Giriş Yap",
    to: "/giris/",
  },
  {
    title: "Üye Ol",
    to: "/uye-ol/",
  },
];
const menuUser = [
  {
    title: "Hesabım",
    to: "/hesabim/",
  },
  {
    title: "Adres Bilgilerim",
    to: "/hesabim/adreslerim/",
  },
  {
    title: "Siparişlerim",
    to: "/hesabim/siparislerim/",
  },
  {
    title: "İade Taleplerim",
    to: "/hesabim/iade-taleplerim/",
  },
  {
    title: "Şifre Güncelleme",
    to: "/hesabim/sifre-guncelleme/",
  },
  {
    title: "Çıkış",
    to: "/hesabim/cikis/",
  },
];
const menuAdmin = [
  {
    title: "Kontrol Paneline Git",
    to: "/admin/",
  },
];

const ItemMenu = ({ title, to }) => {
  return (
    <>
      <Text as={Link} to={to}>
        <Flex
          as="span"
          textAlign={"center"}
          justifyContent={"center"}
          direction={"row"}
          _hover={{
            opacity:'.8'
          }}
        >
          <Text ml={1}>{title}</Text>
        </Flex>
      </Text>
    </>
  );
};

export default UserMenu;

import {
  Box,
  Container,
  Flex,
  Icon,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";

import { useNavigate } from "react-router";

import { Divider } from "@chakra-ui/react";

import { AiOutlineUser } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";
import { GiCargoCrate, GiReturnArrow } from "react-icons/gi";
import { VscCommentDiscussion } from "react-icons/vsc";

import { RiLockPasswordLine } from "react-icons/ri";

function UserWrapper(props) {
  const { pageName } = props;

  const [pages, setPages] = React.useState([
    {
      name: "index",
      title: "Kullanıcı Bilgilerim",
      icon: AiOutlineUser,
      isActive: false,
    },
    {
      name: "adreslerim",
      title: "Adreslerim",
      icon: MdOutlinePlace,
      isActive: false,
    },
    {
      name: "siparislerim",
      title: "Siparişlerim",
      icon: GiCargoCrate,
      isActive: false,
    },
    {
      name: "iade-taleplerim",
      title: "İade Taleplerim",
      icon: GiReturnArrow,
      isActive: false,
    },
    {
      name: "urun-yorumlarim",
      title: "Ürün Yorumlarım",
      icon: VscCommentDiscussion,
      isActive: false,
    },
    {
      name: "sifre-guncelleme",
      title: "Şifre Güncelleme",
      icon: RiLockPasswordLine,
      isActive: false,
    },
  ]);
  const [activePage, setActivePage] = React.useState("");

  const onClickHandled = (e) => {
    
    //alert(e.target.getAttribute("data-is-active"));

    const values = pages.filter((page) => {
      return page.title === e.target.textContent;
    });

    if ("index" === values[0].name) {
      navigate(`/hesabim/`);
    } else {
      navigate(`/hesabim/${values[0].name}/`);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      {pageName === "cikis" ? (
        "çıkış yapılıyor"
      ) : (
        <>
          <Box maxW={{ base: "3xl", lg: "7xl" }} py={3} bg={"gray.100"}>
            <Stack
              direction={{
                base: "column",
                lg: "row",
              }}
              align={{
                lg: "flex-start",
              }}
              spacing={{
                base: "8",
                md: "16",
              }}
            >
              <Flex direction="column" flex="1">
                <Box
                  as="nav"
                  w={{ base: "auto", md: 250 }}
                  rounded={10}
                  p={3}
                  bg={"white"}
                >
                  <Text p={2} borderBottom={"2px gray solid"}>
                    Hesabım
                  </Text>
                  <List>
                    {pages.map((page, index) => (
                      <>
                        {page.name !== "cikis" ? (
                          <>
                            <NavItem
                              pageName={page.title}
                              name={page.name}
                              icon={page.icon}
                              py={index === pages.length - 1 ? 2 : 3}
                              onClick={onClickHandled}

                            />
                            {index === pages.length - 1 ? "" : <Divider />}
                          </>
                        ) : null}
                      </>
                    ))}
                  </List>
                </Box>
              </Flex>
              <Stack
                spacing={{
                  base: "8",
                  md: "8",
                }}
                flex="2"
              >
                <Stack spacing="6" w={"full"}>
                  <Box as="aside" rounded={10} p={3} w={"auto"} bg={"white"}>
                    <Text as="div" p={2} borderBottom={"2px gray solid"}>
                      {pages.map((page, i) =>
                        page.name === pageName ? <>{page.title}</> : ""
                      )}
                    </Text>
                    <Box w={{ base: "full", md: "container.sm" }}>
                      {props.children}
                    </Box>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </>
      )}
    </>
  );
}
const NavItem = (props) => {
  return (
    <>
      <ListItem
        as={"li"}
        py={props.py}
        _hover={{ bg: "purple", color: "#fff" }}
        cursor="pointer"
        onClick={props.onClick}
        data-is-active={props.name}
      >
        <Stack direction={"row"} spacing={3}>
          <ListIcon as={props?.icon} color="red.500" />
          <Text>{props?.pageName}</Text>
        </Stack>
      </ListItem>
    </>
  );
};
export default UserWrapper;

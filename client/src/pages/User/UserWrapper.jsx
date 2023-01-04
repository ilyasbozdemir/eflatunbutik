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
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import { useNavigate } from "react-router";

import { Divider } from "@chakra-ui/react";

import { AiOutlineUser } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";
import { GiCargoCrate, GiReturnArrow } from "react-icons/gi";
import { VscCommentDiscussion } from "react-icons/vsc";

import { RiLockPasswordLine } from "react-icons/ri";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
function UserWrapper(props) {
  const { pageName } = props;

  const [pages, setPages] = React.useState([
    { name: "index", title: "Kullanıcı Bilgilerim", icon: AiOutlineUser },
    { name: "adreslerim", title: "Adreslerim", icon: MdOutlinePlace },
    { name: "siparislerim", title: "Siparişlerim", icon: GiCargoCrate },
    { name: "iade-taleplerim", title: "İade Taleplerim", icon: GiReturnArrow },
    {
      name: "urun-yorumlarim",
      title: "Ürün Yorumlarım",
      icon: VscCommentDiscussion,
    },
    {
      name: "sifre-guncelleme",
      title: "Şifre Güncelleme",
      icon: RiLockPasswordLine,
    },
  ]);

  const onClickHandled = (e) => {
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
        <Stack bg={"gray.100"}>
          <Stack
            as="section"
            m={5}
            spacing={10}
            direction={{ base: "column", md: "row" }}
          >
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
                          icon={page.icon}
                          py={index === pages.length - 1 ? 2 : 3}
                          data-value={page.title}
                          onClick={onClickHandled}
                        />
                        {index === pages.length - 1 ? "" : <Divider />}
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ))}
              </List>
            </Box>
            <Box as="aside" rounded={10} p={3} w={"auto"} bg={"white"}>
              <Text as="div" p={2} borderBottom={"2px gray solid"}>
                {pages.map((page, i) =>
                  page.name === pageName ? <>{page.title} </> : ""
                )}
              </Text>
              {props.children}
            </Box>
          </Stack>
        </Stack>
      )}
    </>
  );
}
const NavItem = (props) => {
  return (
    <>
      <ListItem
        py={props.py}
        _hover={{ bg: "purple", color: "#fff" }}
        cursor="pointer"
        onClick={props.onClick}
      >
        <Stack direction={"row"} spacing={3}>
          {props.pageName ? (
            <>
              <Icon as={props?.icon} />
              <Text>{props?.pageName}</Text>
            </>
          ) : null}
        </Stack>
      </ListItem>
    </>
  );
};
export default UserWrapper;

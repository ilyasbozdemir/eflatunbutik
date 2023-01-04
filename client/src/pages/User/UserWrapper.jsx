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

function UserWrapper(props) {
  const { pageName } = props;
  const [asideTitleName, setAsideTitleName] = React.useState("");

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

  const navigate = useNavigate();

  if (pageName) {
  }

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
              <Text p={2} borderBottom={"2px pink solid"}>
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
                        />
                        {index === pages.length - 1 ? "" : <Divider />}
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ))}
                <NavItem />
              </List>
            </Box>
            <Box as="aside" rounded={10} p={3} w={"auto"} bg={"white"}>
              <Text as="div" p={2} borderBottom={"2px gray solid"}>
                {pageName}
              </Text>
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
      <ListItem py={props.py} cursor="pointer">
        <Stack direction={"row"} spacing={3}>
          {props.pageName ? (
            <>
              <Icon as={props?.icon} />
              <Text>{props?.pageName}</Text>
            </>
          ) : (
            ""
          )}
        </Stack>
      </ListItem>
    </>
  );
};
export default UserWrapper;

import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  useDisclosure as UseDisclosure,
  Icon,
  Stack,
} from "@chakra-ui/react";

import Logo from "../Logo";

import { MdOutlineFavoriteBorder } from "react-icons/md";

import { MdOutlineShoppingCart } from "react-icons/md";

import SearchBox from "./SearchBox";

import { Link } from "react-router-dom";

import UserMenu from "./UserMenu";
function HeaderBrand() {
  const { isOpen, onOpen, onClose } = UseDisclosure();
  const [isFavoriShown, setIsFavoriShown] = React.useState(false);
  const [shoppingCartisShown, setShoppingCartIsShown] = React.useState(false);
  const [userIsShown, setUserIsShown] = React.useState(false);
  return (
    <>
      <Flex justifyContent={"flex-start"} mt={5}  mb={2}>
        <Heading size="md">
          <Link to="/">
            <Logo />
          </Link>
        </Heading>

        <Spacer />

        <Box borderRadius={"50px 50px 50px 50px"}>
          <SearchBox />
        </Box>

        <Spacer />

        <Stack direction={"row"} textAlign={'center'}>
      
            <UserMenu isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
          
          <Link
            to="/favorilerim/"
            bg={"transparent"}
            aria-label="product favorite"
            onMouseEnter={() => setIsFavoriShown(true)}
            onMouseLeave={() => setIsFavoriShown(false)}
            mx={1}
            px={2}
          >
            <Icon as={MdOutlineFavoriteBorder} fontSize={25} />
          </Link>

          <Link
            bg={"transparent"}
            aria-label="product basket button"
            to="/sepetim/"
            mx={1}
            px={2}
          >
            <Icon as={MdOutlineShoppingCart} fontSize={25} />
          </Link>
        </Stack>
      </Flex>
    </>
  );
}

export default HeaderBrand;

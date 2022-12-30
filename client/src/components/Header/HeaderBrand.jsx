import React from "react";
import {
  Flex,
  Box,
  Heading,
  useDisclosure as UseDisclosure,
  Icon,
} from "@chakra-ui/react";

import Logo from "../Logo";

import { MdOutlineFavoriteBorder } from "react-icons/md";

import { MdOutlineShoppingCart } from "react-icons/md";

import SearchBox from "./SearchBox";

import { Link } from "react-router-dom";

import { MainContext, useContext } from "../../../src/contexts/MainContext";
import UserMenu from "./UserMenu";
import BasketView from "./BasketView";

function HeaderBrand() {
  const { isOpen, onOpen, onClose } = UseDisclosure();

  const {
    isOpen: isBasketOpen,
    onOpen: onBasketOpen,
    onClose: onBasketClose,
  } = UseDisclosure();

  const { basket, wishlist } = useContext(MainContext);

  const wishlistLength = React.useMemo(
    () => wishlist.length,
    [wishlist.length]
  );
  const basketLength = React.useMemo(() => basket.length, [basket.length]);

  return (
    <>
      <Flex justifyContent={"space-between"} mt={5} mb={2}>
        <Heading size="md">
          <Link to="/">
            <Logo />
          </Link>
        </Heading>

        <Box borderRadius={"50px 50px 50px 50px"}>
          <SearchBox />
        </Box>

        <Box>
          <UserMenu
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            fontSize={31}
          />

          <Box
            as={Link}
            to="/favorilerim/"
            bg={"transparent"}
            aria-label="product favorite"
            mx={1}
            pl={2}
            pos={"relative"}
            transformOrigin="top"
            _before={{
              content: `"${wishlistLength}"`,
              position: "absolute",
              top: "-5%",
              right: "0",
              width: "5px",
              height: "5px",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Icon as={MdOutlineFavoriteBorder} fontSize={31} />
          </Box>

          <Box
            as="span"
            bg={"transparent"}
            aria-label="product basket button"
            mx={1}
            ml={4}
            cursor={"pointer"}
            onClick={onBasketOpen}
            transformOrigin="top"
            pos={"relative"}
            _before={{
              content: `"${basketLength}"`,
              position: "absolute",
              top: "-5%",
              right: "0",
              display: "grid",
              placeItems: "center",
              width: "5px",
              height: "5px",
            }}
          >
            <Icon as={MdOutlineShoppingCart} fontSize={31} />

            <BasketView
              placement={"right"}
              onClose={onBasketClose}
              isOpen={isBasketOpen}
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default HeaderBrand;

import React from "react";
import {
  Flex,
  Box,
  Heading,
  useDisclosure as UseDisclosure,
  Icon,
  PseudoBox,
} from "@chakra-ui/react";

import Logo from "../Logo";

import { MdOutlineFavoriteBorder } from "react-icons/md";

import { MdOutlineShoppingCart } from "react-icons/md";

import SearchBox from "./SearchBox";

import { Link, useLocation } from "react-router-dom";

import { MainContext, useContext } from "../../../src/contexts/MainContext";
import UserMenu from "./UserMenu";
import BasketView from "./BasketView";

import { keyframes, usePrefersReducedMotion } from "@chakra-ui/react";

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

  const spin = keyframes`
  0%   {rotate: 15deg;}
  25%  {rotate: -15deg;}
  75%  {rotate: 15deg;}
  100% {rotate: 0deg;}
`;

  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion ? undefined : `${spin} 1s forwards`;
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
            as="span"
            bg={"transparent"}
            aria-label="product basket button"
            mx={1}
            ml={4}
            cursor={"pointer"}
            transformOrigin="top"
            pos={"relative"}
            _before={{
              content: `"${wishlistLength}"`,
              color: "red",
              position: "absolute",
              top: "0",
              right: "0",
              display: "inline",
              whiteSpace: "pre",
              placeItems: "center",
              fontWeight: "semibold",
              width: "17px",
              height: "17px",
              backgroundColor: "#fff",
              border: "2px #090909 solid",
              borderRadius: "50%",
              textAlign: "center",
              fontSize: "10px",
              animation: animation,
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
            onClick={basket.length > 0 ? onBasketOpen : ""}
            transformOrigin="top"
            pos={"relative"}
            _before={{
              content: `"${basketLength}"`,
              color: "red",
              position: "absolute",
              top: "0",
              right: "0",
              display: "inline",
              whiteSpace: "pre",
              placeItems: "center",
              fontWeight: "semibold",
              width: "17px",
              height: "17px",
              backgroundColor: "#fff",
              border: "2px #090909 solid",
              borderRadius: "50%",
              textAlign: "center",
              fontSize: "10px",
              animation: animation,
            }}
          >
            <Icon as={MdOutlineShoppingCart} fontSize={31} />
            {basket.length > 0 ? (
              <BasketView
                placement={"right"}
                onClose={onBasketClose}
                isOpen={isBasketOpen}
              />
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default HeaderBrand;

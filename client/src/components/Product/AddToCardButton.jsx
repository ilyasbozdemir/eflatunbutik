import React, { useRef } from "react";

import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue as UseColorModeValue,
} from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

import { BiShoppingBag } from "react-icons/bi";

import { MainContext, useContext } from "../../contexts/MainContext";
import { useToast } from "@chakra-ui/react";

function AddToCardButton({ product }) {
  const { basket, setBasket } = useContext(MainContext);

  const { id, name, price, salePrice, imageUrls, description, currency } =
    product;

  const [show, setShow] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);

  const [duration, setDuration] = React.useState(1000);
  const toast = useToast();

  const addToCart = () => {
    setBasket([
      ...basket,
      {
        id: id,
        price: price,
        salePrice: salePrice,
        currency: currency,
        name: name,
        description: description,
        quantity: 1,
        imageUrl: imageUrls[0].src,
      },
    ]);
  };

  const clickHandled = () => {
    setIsDisabled(true);
    setShow(true);

    setTimeout(() => {
      setIsDisabled(false);
      setShow(false);
    }, duration);

    setTimeout(() => {
      toast({
        title: "Ürün Sepete Eklendi",
        status: "success",
        position: "top",
        duration: duration,
        isClosable: true,
      });
      addToCart();
    }, duration);
  };

  return (
    <>
      <Button
        width="95%"
        variant="primary"
        color={"white"}
        bg={UseColorModeValue("gray.100", "gray.700")}
        bgGradient={"linear(to-l, #7928CA, #FF0080)"}
        _hover={{
          opacity: 0.9,
        }}
        onClick={clickHandled}
        cursor={"pointer"}
        disabled={isDisabled}
        _disabled={{
          cursor: "progress",
          bg: "orange.400",
          color: "white",
        }}
      >
        <Flex
          justifyContent={"space-between"}
          direction={"row"}
          justifyItems={"center"}
          fontSize={{ base: 12, md: 14, lg: 15 }}
        >
          {show === false ? (
            <>
              <Icon as={BiShoppingBag} />
              <Text>Sepete Ekle</Text>
            </>
          ) : (
            <Flex
              as="span"
              textAlign={"center"}
              justifyContent={"center"}
              gap={1}
            >
              <Text fontFamily={"Arial, Helvetica, sans-serif"}>
                Sepete Ekleniyor
              </Text>
              <CircularProgress size={"4"} isIndeterminate color="red.500" />
            </Flex>
          )}
        </Flex>
      </Button>
    </>
  );
}

export default AddToCardButton;

import React from "react";
import {
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue as UseColorModeValue,
} from "@chakra-ui/react";

import { BiShoppingBag } from "react-icons/bi";

import { MainContext, useContext } from "../../contexts/MainContext";

function AddToCardButton({ product }) {
  const { basket, setBasket } = useContext(MainContext);

  const { id, name, price, salePrice, imageUrl, description, currency } =
    product;

  const clickHandled = () => {
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
        imageUrl: imageUrl,
      },
    ]);
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
      >
        <Flex
          justifyContent={"space-between"}
          direction={"row"}
          justifyItems={"center"}
          fontSize={{ base: 12, md: 14, lg: 15 }}
        >
          <Icon as={BiShoppingBag} />
          <Text>Sepete Ekle</Text>
        </Flex>
      </Button>
    </>
  );
}

export default AddToCardButton;

import React from "react";
import {
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue as UseColorModeValue,
} from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

import { BiLoader, BiShoppingBag } from "react-icons/bi";

import { MainContext, useContext } from "../../contexts/MainContext";
import { useToast } from "@chakra-ui/react";

function AddToCardButton({ product, body, quantity }) {
  const { basket, setBasket } = useContext(MainContext);

  const { id, name, price, salePrice, imageUrls, description, currency, slug } =
    product;

  const [isDisabled, setIsDisabled] = React.useState(false);

  const [duration, setDuration] = React.useState(500);
  const toast = useToast();

  const addToCart = () => {
    const checkBasket = basket.find(
      (item) => item.id === id && item.body === body
    );

    if (checkBasket) {
      if (checkBasket.quantity + Number(quantity) > 5) {
        toast({
          title: "Üründen en fazla 5 tane eklenebilir.",
          status: "error",
          position: "top-right",
          duration: duration,
          isClosable: true,
        });
      } else {
        checkBasket.quantity += Number(quantity);
        setBasket([...basket.filter((item) => item.id !== id), checkBasket]);

        toast({
          title: "Ürün Sepete Eklendi",
          status: "success",
          position: "top",
          duration: duration,
          isClosable: true,
        });
      }
    } else {
      setBasket([
        ...basket,
        {
          id: id,
          price: price,
          salePrice: salePrice,
          currency: currency,
          name: name,
          description: description,
          quantity: Number(quantity),
          imageUrl: imageUrls[0].src,
          slug: slug,
          body: body,
        },
      ]);
    }
  };

  const clickHandled = () => {
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, duration);

    setTimeout(() => {
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
        isLoading={isDisabled}
        loadingText="Sepete Ekleniyor"
        //spinner={<BiLoader color="white" />}
      >
        <Flex
          justifyContent={"space-between"}
          direction={"row"}
          justifyItems={"center"}
          fontSize={{ base: 12, md: 14, lg: 15 }}
        >
          <>
            <Icon as={BiShoppingBag} />
            <Text>Sepete Ekle</Text>
          </>
        </Flex>
      </Button>
    </>
  );
}

export default AddToCardButton;

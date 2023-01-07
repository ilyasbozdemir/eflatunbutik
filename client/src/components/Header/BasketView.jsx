import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useColorModeValue,
  Stack,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import BasketDrawerItem from "../Cart/BasketDrawerItem";

import { MainContext, useContext } from "../../contexts/MainContext";
import { CartItem } from "../Cart/CartItem";

function BasketView(props) {
  const { placement, onClose, isOpen } = props;
  const navigate = useNavigate();
  const { basket, setBasket ,products} = useContext(MainContext);

  const totalPrice = () => {
    return basket.reduce((prev, product) => {
      return (prev += product.price * product.quantity);
    }, 0);
  };

  const [subtotal, setSubtotal] = React.useState(totalPrice());

  const deleteByValue = (v) => {
    setBasket((oldValues) => {
      return oldValues.filter((p) => p.id !== v.id);
    });
  };
  
  return (
    <>
      <Drawer
        size={"sm"}
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Sepetim: ({basket.length}) Ürün
          </DrawerHeader>
          <DrawerBody>
            <Stack>
              {basket.map((item) => (
                <>
                  <BasketDrawerItem
                    key={item.id}
                    {...item}
                    onClickDelete={() => {
                      deleteByValue(item);
                    }}
                  />
                </>
              ))}
            </Stack>
          </DrawerBody>
          <Flex textAlign={"center"} justifyContent={"flex-end"} mr={5}>
            <Text fontWeight="semibold">Ara Toplam {" " + subtotal}</Text>
          </Flex>
          <DrawerFooter gap={3}>
            <>
              <>
                <Button
                  fontSize={"md"}
                  width={"full"}
                  variant="primary"
                  color={"white"}
                  bg={useColorModeValue("gray.100", "gray.700")}
                  bgGradient={"linear(to-l, #7928CA, #FF0080)"}
                  _hover={{
                    bg: useColorModeValue("gray.800", "gray.500"),
                    bgGradient: "linear(to-r, #ac28ca, #ff1060)",
                  }}
                  onClick={() => {
                    setTimeout(() => {
                      onClose();
                    }, 300);
                    navigate("/sepetim/");
                  }}
                >
                  Sepete Git
                </Button>

                <Button
                  fontSize={"sm"}
                  width={"full"}
                  variant="primary"
                  color={"white"}
                  bg={useColorModeValue("gray.100", "gray.700")}
                  bgGradient={"linear(to-l, #7928CA, #FF0080)"}
                  _hover={{
                    bg: useColorModeValue("gray.800", "gray.500"),
                    bgGradient: "linear(to-r, #ac28ca, #ff1060)",
                  }}
                  onClick={() => {
                    setTimeout(() => {
                      onClose();
                    }, 300);
                    navigate("/siparis/adres/");
                  }}
                  rightIcon={<FaArrowRight />}
                >
                  Alışverişi Tamamla
                </Button>
              </>
            </>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default BasketView;

import React from "react";

import {
  Box,
  HStack,
  Flex,
  Heading,
  Stack,
  useColorModeValue as mode,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { MainContext, useContext } from "../../contexts/MainContext";
import { Link } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

function Basket() {
  const { basket, setBasket } = useContext(MainContext);

  console.table(basket);

  const {
    isOpen: alertIsOpen,
    onOpen: alertOnOpen,
    onClose: alertonClose,
  } = useDisclosure();
  const cancelRef = React.useRef();

  const deleteByValue = (v) => {
    setBasket((oldValues) => {
      return oldValues.filter((p) => p.id !== v.id);
    });
  };
  const bodies = Array.from(new Set(basket.map((item) => item.body)));

  console.table(bodies)

  return (
    <>
      <Box maxW={{ base: "3xl", lg: "7xl" }}>
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
          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            flex="2"
          >
            <Heading
              fontSize="2xl"
              fontWeight="extrabold"
              fontFamily={"Open Sans"}
            >
              Alışveriş Sepeti ({basket.length} Ürün)
            </Heading>

            <Stack spacing="6">
              {bodies.map((body) => {
                const items = basket.filter((item) => item.body === body);

                return (
                  <>
                    {items.map((item) => (
                      <>
                        <CartItem
                          key={`${item.id}_${item.body}`}
                          {...item}
                          onClickDelete={() => {
                            deleteByValue(item);
                          }}
                        />
                      </>
                    ))}
                  </>
                );
              })}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />

            <HStack mt="6" fontWeight="semibold">
              <p>veya</p>
              <Link to={"/"}>
                {/* not:
                burda sepete sayfasına hangi sayfadan geldiğini kontrol edip oraya yönlendirelim.

                 */}
                <Text color={mode("pink.500", "pink.200")}>
                  Alışverişe devam et
                </Text>
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </>
  );
}

export default Basket;

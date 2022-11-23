import React from "react";

import {
  Box,
  HStack,
  Flex,
  Heading,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { cartData } from "./_data";

function Basket() {
  return (
    <>
      <Box
        maxW={{
          base: "3xl",
          lg: "7xl",
        }}
        mx="auto"
        px={{
          base: "4",
          md: "8",
          lg: "12",
        }}
        py={{
          base: "6",
          md: "8",
          lg: "12",
        }}
      >
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
            <Heading fontSize="2xl" fontWeight="extrabold" fontFamily={'corbel'}>
              Alışveriş Sepeti ({cartData.length} Ürün)
            </Heading>

            <Stack spacing="6">
              {cartData.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
              <p>veya</p>
              <Link color={mode("pink.500", "pink.200")}>
                Alışverişe devam et
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </>
  );
}

export default Basket;

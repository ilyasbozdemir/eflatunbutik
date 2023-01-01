import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

import AddressCard from "../components/AddressCard";
import CartOrderSummaryAddress from "../components/CartOrderSummaryAddress";

function ProductAddress() {
  return (
    <>
      <Box maxW={{ base: "3xl", lg: "7xl" }} py={3}>
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
            <Stack spacing="6" w={"full"}>
              <Stack
                direction={{
                  sm: "row",
                }}
                justifyContent={'center'}
              >
                <Button
                  variant={"ghost"}
                  color={"white"}
                  bg={"pink.500"}
                  _hover={{ color: "white", bg: "pink.700" }}
                >
                  Yeni Adres Ekle
                </Button>
                <Stack
                  direction={{
                    sm: "row",
                  }}
                  maxW={{
                    lg: "360px",
                  }}
                >
                  <Input placeholder="Ara" type="text" w={"full"} />
                  <IconButton
                    color="pink.500"
                    type="submit"
                    flexShrink={0}
                    icon={<BsSearch />}
                  />
                </Stack>
              </Stack>
              <Wrap>
                <WrapItem>
                  <AddressCard
                    title={"test title"}
                    addressContent={
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae aperiam nobis adipisci cum nemo amet aliquam aut dicta voluptate necessitatibus, molestias hic ipsam mollitia fuga ipsum repellendus ducimus alias incidunt?"
                    }
                  />
                </WrapItem>
                <WrapItem>
                  <AddressCard
                    title={"test title"}
                    addressContent={
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae aperiam nobis adipisci cum nemo amet aliquam aut dicta voluptate necessitatibus, molestias hic ipsam mollitia fuga ipsum repellendus ducimus alias incidunt?"
                    }
                  />
                </WrapItem>
              </Wrap>
            </Stack>
          </Stack>

          <Flex direction="column" flex="1">
            <CartOrderSummaryAddress />
          </Flex>
        </Stack>
      </Box>
    </>
  );
}

export default ProductAddress;

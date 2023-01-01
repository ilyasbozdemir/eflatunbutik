import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

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
            <Stack spacing="6">
              <Box>
                <Button
                  variant={"ghost"}
                  color={"white"}
                  bg={"green.500"}
                  _hover={{ color: "white", bg: "green.700" }}
                >
                  Yeni Adres Ekle
                </Button>
              </Box>
            </Stack>
          </Stack>

          <Flex direction="column" flex="1">
            Sipariş Özeti
          </Flex>
        </Stack>
      </Box>
    </>
  );
}

export default ProductAddress;

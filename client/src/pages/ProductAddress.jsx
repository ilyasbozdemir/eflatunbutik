import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

function ProductAddress() {
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
            <Stack spacing="6">
              <Text>dfgdf</Text>
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            fgdfg
          </Flex>
        </Stack>
      </Box>
    </>
  );
}

export default ProductAddress;

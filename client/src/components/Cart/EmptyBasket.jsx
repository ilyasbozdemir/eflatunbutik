import { Text, Icon, Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import ShoppingButton from "./ShoppingButton";
function EmptyBasket() {
  return (
    <>
      <Box borderStyle={"dashed"}>
        <Flex
          direction={"row"}
          justifyContent={"space-between"}
          p={5}
        >
          <Text as="h3" size="lg" fontFamily={"corbel"}>
            <Flex justifyItems={"center"} textAlign={"center"}>
              
              <Icon as={FiShoppingCart} fontSize={25} mx={2} />

              Sepetinde ürün bulunmamaktadır.
            </Flex>
          </Text>
          <Spacer />
          <ShoppingButton />
        </Flex>
      </Box>
    </>
  );
}

export default EmptyBasket;

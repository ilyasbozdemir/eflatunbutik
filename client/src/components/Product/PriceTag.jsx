import { HStack, Text } from "@chakra-ui/react";
import React from "react";

function PriceTag(props) {
  const { price, salePrice, currency, locale } = props;
  return (
    <>
      <HStack>
        {salePrice === undefined ? null : (
          <Text color={"gray.500"} as={"s"}>{`${salePrice} TL`}</Text>
        )}
        <Text color={"#cc19e0"}>{`${price} TL`}</Text>
      </HStack>
    </>
  );
}

export default PriceTag;

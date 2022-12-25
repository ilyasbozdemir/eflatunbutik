import { HStack, Text } from "@chakra-ui/react";
import React from "react";

function PriceTag(props) {
  const { price, salePrice, currency, locale } = props;
  return (
    <>
      <HStack>
        {salePrice === undefined ? null : (
          <Text
            fontSize={[12, 13, 14, 15, 16]}
            css={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellips",
            }}
            color={"gray.500"}
            as={"s"}
          >{`${salePrice} TL`}</Text>
        )}
        <Text
          fontSize={[12, 13, 14, 15, 16]}
          css={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellips",
          }}
          color={"#cc19e0"}
        >{`${price} TL`}</Text>
      </HStack>
    </>
  );
}

export default PriceTag;

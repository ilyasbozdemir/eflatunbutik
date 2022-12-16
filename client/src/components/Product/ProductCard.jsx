import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { Rating } from "./Rating";
import { FavouriteButton } from "./FavouriteButton";
import { PriceTag } from "./PriceTag";

import AddToCardButton from "./AddToCardButton";

export const ProductCard = (props) => {
  const { product, rootProps } = props;
  const { name, price, salePrice, rating, ratingCount, imageUrl } = product;
  const { id, src, alt } = imageUrl;

  return (
    <>
      <Link as={'a'} href={"/#"} target={"_blank"}>
        <Stack
          spacing={useBreakpointValue({
            base: "4",
            md: "5",
          })}
          _hover={{
            transform: "scale(1.05)",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          }}
          transition="all .5s ease-in-out"
          cursor={"pointer"}
          border={"1px #cdc solid"}
          borderRadius={useBreakpointValue({
            base: "md",
            md: "xl",
          })}
          {...rootProps}
          zIndex={100}
        >
          <Box position="relative">
            <AspectRatio ratio={2 / 3}>
              <Image
                src={src}
                alt={alt}
                draggable={false}
                fallback={<Skeleton />}
                borderRadius={useBreakpointValue({
                  base: "md",
                  md: "xl",
                })}
              />
            </AspectRatio>

            <FavouriteButton
              position="absolute"
              top="2"
              right="2"
              aria-label={`Add ${name} to your favourites`}
            />
          </Box>
          <Stack>
            <Stack spacing="1">
              <Link>
                <Text
                  fontWeight="medium"
                  color={useColorModeValue("gray.700", "gray.400")}
                >
                  {name}
                </Text>
              </Link>
              <PriceTag price={price} salePrice={salePrice} currency="TRY" />
            </Stack>
            <HStack>
              <Rating defaultValue={rating} size="sm" />
              <Text
                as="small"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                {ratingCount === 0 ? null : `(${ratingCount})`}
              </Text>
            </HStack>
          </Stack>
          <Stack align="center" transition="all .5s ease-in-out">
            <AddToCardButton />
          </Stack>
        </Stack>
      </Link>
    </>
  );
};

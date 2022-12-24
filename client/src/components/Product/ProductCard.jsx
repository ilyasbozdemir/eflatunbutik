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
import PriceTag from "./PriceTag";
import { Tooltip } from "@chakra-ui/react";
import AddToCardButton from "./AddToCardButton";
export const ProductCard = (props) => {
  const { product, rootProps } = props;
  const { name, price, salePrice, rating, ratingCount, slug, imageUrl } =
    product;
  const { id, src, alt } = imageUrl;

  const [ratingSize, setRatingSize] = React.useState(10);
  return (
    <Stack position="relative" w={160} h={150}>
      <Stack
        textDecoration="none"
        cursor={"pointer"}
        border={"1px #ccc solid"}
        borderRadius={useBreakpointValue({
          base: "md",
          md: "xl",
        })}
        {...rootProps}
        zIndex={100}
        p={1}
      >
        <Link
          as={"a"}
          href={`/p/${id}-${slug}`}
          target={"_blank"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Box>
            <AspectRatio ratio={2 / 3} overflow={"hidden"}>
              <Image
                src={src}
                alt={alt}
                draggable={false}
                fallback={<Skeleton />}
                borderRadius={useBreakpointValue({
                  base: "md",
                  md: "xl",
                })}
                transition="all .5s ease-in-out"
                _hover={{
                  transform: "scale(1.02)",
                }}
              />
            </AspectRatio>
          </Box>
          <Stack >
            <Stack spacing="1">
              <Link>
                <Text
                  fontSize={13}
                  color={useColorModeValue("gray.700", "gray.400")}
                  css={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellips",
                  }}
                >
                  <Tooltip openDelay={100} label={name} fontSize={13}>
                    {name}
                  </Tooltip>
                </Text>
              </Link>

              <PriceTag
                price={price}
                salePrice={salePrice}
                currency="TRY"
                locale={"tr-TR"}
              />
            </Stack>
            <HStack>
              <Rating defaultValue={rating} size={ratingSize} />

              {ratingCount === 0 ? null : (
                <>
                  <Text
                    _dark={{ color: "gray.400" }}
                    _light={{ color: "gray.600" }}
                    fontSize={ratingSize}
                  >
                    <Tooltip
                      label={`Yorum sayısı :${ratingCount}`}
                      children={`(${ratingCount})`}
                    />
                  </Text>
                </>
              )}
            </HStack>
            <Stack align="center" mt={2}>
              <AddToCardButton product={product} />
            </Stack>
            <Stack align="center" mt={2}>
              <Link>Hızlı Gözat</Link>
            </Stack>
          </Stack>
        </Link>
      </Stack>

      <FavouriteButton
        position="absolute"
        top="0"
        right="1"
        aria-label={`Add ${name} to your favourites`}
        zIndex={110}
      />
    </Stack>
  );
};

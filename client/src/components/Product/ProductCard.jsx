import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  Button,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack position="relative" w={{ md: 160 }} h={{ md: 150 }}>
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
          <Stack>
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
          </Stack>
        </Link>

        <Stack align="center" mt={2}>
          <AddToCardButton product={product} />
        </Stack>
        <Stack align="center" mt={2}>
          <Text onClick={onOpen}>Hızlı Gözat</Text>
        </Stack>
      </Stack>

      <FavouriteButton
        position="absolute"
        top="0"
        right="1"
        aria-label={`Add ${name} to your favourites`}
        zIndex={110}
      />
      <QuickProductDetailModal
        isOpen={isOpen}
        onClose={onClose}
        product={product}
      />
    </Stack>
  );
};

const QuickProductDetailModal = (props) => {
  const { isOpen, onClose, product } = props;
  const { name, price, salePrice, rating, ratingCount, slug, imageUrl } =
    product;
  const { id, src, alt } = imageUrl;
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", md: "lg" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio ratio={4 / 3} allowFullScreen>
              <Image
                src={src}
                alt={alt}
                draggable={false}
                fallback={<Skeleton />}
              />
            </AspectRatio>
          </ModalBody>

          <AddToCardButton product={product} />
        </ModalContent>
      </Modal>
    </>
  );
};

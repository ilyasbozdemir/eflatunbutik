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

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { useMediaQuery } from "@chakra-ui/react";

import * as React from "react";
import { Rating } from "./Rating";
import { FavouriteButton } from "./FavouriteButton";
import PriceTag from "./PriceTag";
import { Tooltip } from "@chakra-ui/react";
import AddToCardButton from "./AddToCardButton";

import { cardVariant } from "../../motion";

import { motion } from "framer-motion";
const MotionStack = motion(Stack);

export const ProductCard = (props) => {
  const { product, rootProps } = props;

  const { name, price, salePrice, ratings, slug, imageUrls, flag } = product;

  const { id, src, alt } = imageUrls[0];

  const {
    oneRatingCount,
    twoRatingCount,
    threeRatingCount,
    fourRatingCount,
    fiveRatingCount,
  } = ratings[0];

  const [ratingCount, setRatingCount] = React.useState(
    oneRatingCount +
      twoRatingCount +
      threeRatingCount +
      fourRatingCount +
      fiveRatingCount
  );

  const [avgRating, setAavgRating] = React.useState(
    (fiveRatingCount * 5 +
      fourRatingCount * 4 +
      threeRatingCount * 3 +
      twoRatingCount * 2 +
      oneRatingCount * 1) /
      ratingCount
  );

  const [showAddToCardButton, setShowAddToCardButton] = React.useState(false);

  const [ratingSize, setRatingSize] = React.useState(10);
  const { isOpen, onOpen, onClose } = useDisclosure();

  //Mobile devices
  const [isLargerThan320] = useMediaQuery("(min-width: 320px)");
  const [isLessThan480] = useMediaQuery("(max-width: 480px)");
  //iPads, Tablets
  const [isLargerThan481] = useMediaQuery("(min-width: 480px)");
  const [isLessThan768] = useMediaQuery("(max-width: 768px)");
  //Small screens, laptops
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");
  const [isLessThan1024] = useMediaQuery("(max-width: 1024px)");
  //Desktops, large screens
  const [isLargerThan1025] = useMediaQuery("(min-width: 1025px)");
  const [isLessThan1200] = useMediaQuery("(max-width: 1200px)");

  const discountPercentage = Math.ceil(((salePrice - price) / price) * 100);

  //const [h, setH] = React.useState();
  const [w, setW] = React.useState();

  React.useEffect(() => {
    setW(100);
    console.log("mobile" + isLargerThan320 + " " + isLessThan480);
  }, [isLargerThan320, isLessThan480]);

  React.useEffect(() => {
    setW(120);
    console.log("tablet" + isLargerThan481 + " " + isLessThan1024);
  }, [isLargerThan481, isLessThan1024]);

  React.useEffect(() => {
    setW(160);
    console.log("laptops" + isLargerThan769 + " " + isLessThan768);
  }, [isLargerThan769, isLessThan768]);

  React.useEffect(() => {
    setW(170);
    console.log("desktops" + isLargerThan1025 + " " + isLessThan1200);
  }, [isLargerThan1025, isLessThan1200]);

  const linkVariants = {
    as: "a",
    href: `/p/${product.id}/${slug}`,
    target: "_blank",
    _hover: {
      textDecoration: "none",
    },
  };

  return (
    <>
      <Stack w={w}>
        <MotionStack
          variants={cardVariant}
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
          <>
            <Box position="relative">
              <Link {...linkVariants}>
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
              </Link>
              <FavouriteButton
                position="absolute"
                top="0"
                right="1"
                aria-label={`Add ${name} to your favourites`}
                zIndex={110}
              />

              {salePrice !== undefined ? (
                <>
                  <Text
                    fontSize={13}
                    position="absolute"
                    bottom="1"
                    right="1"
                    aria-label={`discount ${name} product`}
                    zIndex={110}
                    bg={"red.500"}
                    color={"white"}
                    borderRadius={"3px"}
                    p={0.2}
                  >
                    -{discountPercentage}%
                  </Text>
                </>
              ) : (
                ""
              )}
            </Box>
            <Stack>
              <Link {...linkVariants}>
                <Stack spacing="1">
                  <Link>
                    <Text
                      fontSize={[12, 13, 14, 15, 16]}
                      color={useColorModeValue("gray.700", "gray.400")}
                      css={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellips",
                      }}
                    >
                      <Tooltip
                        placement={"top"}
                        openDelay={100}
                        label={name}
                        fontSize={13}
                      >
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
                  <Rating defaultValue={avgRating} size={ratingSize} />

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
              </Link>
            </Stack>
          </>

          {showAddToCardButton === true ? (
            <Stack align="center" mt={2}>
              <AddToCardButton product={product} />
            </Stack>
          ) : (
            <></>
          )}

          {/*  <Stack align="center" mt={2}>
            <Button
              width="95%"
              variant="primary"
              color={"white"}
              bgGradient={"linear(to-l, #7928CA, #FF0080)"}
              _hover={{
                opacity: 0.9,
              }}
              onClick={onOpen}
              cursor={"pointer"}
              _disabled={{
                cursor: "progress",
                bg: "orange.400",
                color: "white",
              }}
            >
              Hızlı Gözat
            </Button>
          </Stack>
          */}
        </MotionStack>

        <QuickProductDetailModal
          isOpen={isOpen}
          onClose={onClose}
          product={product}
        />
      </Stack>
    </>
  );
};

const QuickProductDetailModal = (props) => {
  const { isOpen, onClose, product } = props;
  const { name, price, salePrice, rating, ratingCount, slug, imageUrls } =
    product;
  const { id, src, alt } = imageUrls[0];
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
          <ModalBody></ModalBody>

          {/* 
<AddToCardButton product={product} />
 */}
        </ModalContent>
      </Modal>
    </>
  );
};

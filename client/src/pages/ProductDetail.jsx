import {
  Box,
  Divider,
  Flex,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  useRadio,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import Carousel from "../components/Carousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  getRadioProps,
  useRadioGroup,
} from "@chakra-ui/react";
import { Rating } from "../components/Product/Rating";

import { AiOutlineHeart } from "react-icons/ai";

import AddToCardButton from "../components/Product/AddToCardButton";
import { Tooltip } from "chart.js";
import { FavouriteButton } from "../components/Product/FavouriteButton";
function ProductDetail() {
  const [product, setProduct] = React.useState({
    id: "1",
    name: "Muhteşem Tasarım Elbise - Kahve",
    currency: "TRY",
    price: 300,
    flag: "Yeni✨",
    rating: 4,
    ratingCount: 1,
    description: "test description",
    imageUrls: [
      {
        id: "01",
        src: "https://www.eflatunmoda.com/i/l/000/0000464_muhtesem-tasarim-elbise-kahve.jpeg",
        alt: "muhtesem-tasarim-elbise",
      },
      {
        id: "02",
        src: "https://www.eflatunmoda.com/i/l/000/0000464_muhtesem-tasarim-elbise-kahve.jpeg",
        alt: "muhtesem-tasarim-elbise",
      },
    ],
    bodies: ["36", "38", "40", "42", "44", "46"],
  });

  const isMobile = useBreakpointValue({ base: true, md: false });

  const [icon, setIcon] = React.useState(
    <Icon as={AiOutlineHeart} transition="all 0.15s ease" />
  );

  const [bodyValue, setBodyValue] = React.useState("");
  const handleChange = (value) => {
    setBodyValue(value);
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    id: "Beden",
    name: "EvaluationScore",
    onChange: handleChange,
  });
  const group = getRootProps();

  return (
    <Box bg={"gray"}>
      <Box p={3} bg={"white"}>
        <>
          <Breadcrumb fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Current</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={3}
          className="product-detail-container"
          p={3}
        >
          <Stack className="product-left-container">
            <Carousel carousels={product.imageUrls} />
          </Stack>
          <Stack className="product-right-container">
            <Text fontSize={{ base: 18, md: 20, lg: 25 }}>{product.name}</Text>

            <Flex direction={"row"}>
              <Rating defaultValue={product.rating} size={15} />
              <Text fontSize={{ base: 16 }}>
                {product.ratingCount} Değerlendirme
              </Text>
            </Flex>

            <HStack>
              {product.salePrice === undefined ? null : (
                <Text
                  fontSize={{ base: 20, md: 25, lg: 30 }}
                  css={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellips",
                  }}
                  color={"gray.500"}
                  as={"s"}
                >{`${product.salePrice} TL`}</Text>
              )}
              <Text
                fontSize={{ base: 18, md: 20, lg: 25 }}
                css={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellips",
                }}
                color={"#cc19e0"}
              >{`${product.price} TL`}</Text>
            </HStack>
            <Divider />
            <Flex direction={"column"}>
              <HStack>
                <Text fontWeight={"semibold"}>Beden :</Text>{" "}
                <Text>{bodyValue}</Text>
              </HStack>

              <HStack>
                <Stack spacing={5} direction="row" {...group} mt={1}>
                  {product.bodies.map((value) => {
                    const radio = getRadioProps({ value });
                    return (
                      <BodyRadioCard key={value} {...radio} cursor={"pointer"}>
                        {value}
                      </BodyRadioCard>
                    );
                  })}
                </Stack>
              </HStack>
            </Flex>
            <Divider />
            <HStack spacing={3}>
              <AddToCardButton product={product} />
              <>
                {isMobile === false ? (
                  <FavouriteButton
                    aria-label={`Add ${product.name} to your favourites`}
                    fontSize={25}
                  />
                ) : (
                  ""
                )}
              </>
            </HStack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

const BodyRadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <>
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          _checked={{
            bg: "pink.600",
            color: "white",
            borderColor: "pink.600",
          }}
          px={1}
          py={1}
          userSelect={"none"}
        >
          {props.children}
        </Box>
      </Box>
    </>
  );
};

export default ProductDetail;

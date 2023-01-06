import {
  Box,
  Divider,
  Flex,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  useRadio,
  IconButton,
  Icon,
  Image,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Carousel from "../components/Carousel";
import { Breadcrumb, BreadcrumbItem, useRadioGroup } from "@chakra-ui/react";
import { Rating } from "../components/Product/Rating";
import { AiOutlineHeart } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";

import AddToCardButton from "../components/Product/AddToCardButton";

import { FavouriteButton } from "../components/Product/FavouriteButton";
import { IoMdArrowDropright } from "react-icons/io";

import { linkItems } from "../constants/LinkItems";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

import { MainContext, useContext } from "../contexts/MainContext";
import { generatePath } from "react-router";
import { useLocation } from "react-router";

function ProductDetail() {
  const { products } = useContext(MainContext);

  let { productId, productSlug } = useParams();

  const getProduct = () => products.filter((p) => p.id === productId)[0];

  const [product, setProduct] = React.useState(getProduct());

  const isMobile = useBreakpointValue({ base: true, md: false });

  const [category, SetCategory] = React.useState(
    () => linkItems.filter((item) => item.label === product.category)[0]
  );

  const [bodyValue, setBodyValue] = React.useState("");
  const [favCount, setFavCount] = React.useState(0);

  const handleChange = (value) => {
    setBodyValue(value);
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    id: "Beden",
    name: "EvaluationScore",
    defaultValue: product.bodies[0],
    onChange: handleChange,
  });
  const group = getRootProps();

  const navigate = useNavigate();

  const [isProduct, setIsProduct] = React.useState([]);

  const [linkedProducts, setLinkedProducts] = React.useState([]);

  React.useEffect(() => {
    setIsProduct(
      () => getProduct().id === productId && getProduct().slug === productSlug
    );
    if (!isProduct) {
      navigate("*", { replace: true });
    }
    setLinkedProducts(() =>
      product.linkedProducts.map((p) => products.find((p2) => p2.id === p))
    );
  }, [getProduct, product]);

  return (
    <>
      {isProduct === true ? (
        <>
          <Box bg={"gray"}>
            <Box p={3} bg={"white"}>
              <>
                <Breadcrumb
                  fontSize="sm"
                  separator={<Icon as={IoMdArrowDropright} color="gray.500" />}
                  my={2}
                >
                  <BreadcrumbItem>
                    <Link to="/">Anasayfa</Link>
                  </BreadcrumbItem>

                  <BreadcrumbItem>
                    <Link to={category.href}>{category.label}</Link>
                  </BreadcrumbItem>

                  <BreadcrumbItem isCurrentPage>
                    <Text>{product.name}</Text>
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
                  <Flex direction={"row"} justifyContent={"space-between"}>
                    <Text fontSize={{ base: 18, md: 20, lg: 25 }}>
                      {product.name}
                    </Text>

                    {isMobile === true ? (
                      <VStack>
                        <IconButton
                          onClick={async () => {
                            try {
                              const shareData = {
                                title: document.title,
                                text: product.name,
                                url: window.location.href,
                              };
                              await navigator.share(shareData);
                            } catch (err) {
                              alert(err.message);
                            }
                          }}
                          fontSize={22}
                          variant={"ghost"}
                          icon={<IoShareOutline />}
                        />
                        <>
                          <Stack spacing={2} direction={'row'} color={'gray'}>
                            <AiOutlineHeart />
                            <Text as="small">{favCount} favori</Text>
                          </Stack>
                        </>
                      </VStack>
                    ) : (
                      ""
                    )}
                  </Flex>
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
                      <Text fontWeight={"semibold"}>Beden :</Text>
                      <Text>{bodyValue}</Text>
                    </HStack>

                    <HStack>
                      <Stack spacing={5} direction="row" {...group} mt={1}>
                        {product.bodies.map((value) => {
                          const radio = getRadioProps({ value });
                          return (
                            <BodyRadioCard
                              key={value}
                              {...radio}
                              cursor={"pointer"}
                            >
                              {value}
                            </BodyRadioCard>
                          );
                        })}
                      </Stack>
                    </HStack>
                  </Flex>
                  <Flex direction={"column"}>
                    <HStack>
                      <Text fontWeight={"semibold"}>Renk :</Text>
                    </HStack>

                    <HStack>
                      {linkedProducts.map((p, i) => (
                        <Box key={i}>
                          <Tooltip label={p.name}>
                            <Image
                              src={p.imageUrls[0].src}
                              alt={p.imageUrls[0].alt}
                              w={10}
                              onClick={() => {
                                navigate(
                                  generatePath("/p/:productId/:productSlug", {
                                    productId: p.id,
                                    productSlug: p.slug,
                                  })
                                );
                              }}
                              cursor={"pointer"}
                            />
                          </Tooltip>
                        </Box>
                      ))}
                    </HStack>
                  </Flex>
                  <Flex direction={"column"}>
                    <HStack>
                      <Text fontWeight={"semibold"}>Miktar :</Text>{" "}
                      <Text></Text>
                    </HStack>

                    <HStack>miktar componenti</HStack>
                  </Flex>
                  <HStack spacing={3}>
                    <AddToCardButton product={product} />
                    <>
                      {isMobile === false ? (
                        <>
                          <FavouriteButton
                            aria-label={`Add ${product.name} to your favourites`}
                            fontSize={25}
                            m={2}
                          />
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  </HStack>{" "}
                  <Flex
                    direction={"row"}
                    w={"auto"}
                    justifyContent={"space-between"}
                  >
                    <HStack fontSize={"sm"}>
                      <Text fontWeight={"semibold"}>
                        Tahmini Kargoya Teslim:
                      </Text>{" "}
                      <Text>3 gün içinde</Text>
                    </HStack>
                    {isMobile === false ? (
                      <Stack spacing={2} direction={'row'} color={'gray'}>
                        <AiOutlineHeart />
                        <Text as="small">{favCount} favori</Text>
                      </Stack>
                    ) : (
                      <></>
                    )}
                  </Flex>
                  <Divider />
                  <Stack fontSize={"sm"} direction={"column"}>
                    <Text fontWeight={"semibold"}>Ürün Açıklaması</Text>
                    <Text
                      as="textarea"
                      h={200}
                      style={{
                        overflow: "hidden",
                        width: "inherit",
                        maxHeight: "300px",
                        resize: "none",
                        backgroundColor: "transparent",
                      }}
                      disabled
                    >
                      {product.description}
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </>
      ) : (
        ""
      )}
    </>
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

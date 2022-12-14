import React from "react";
import {
  Text,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
} from "@chakra-ui/react";
import Logo from "../Logo";

import { Icon, Stack, FormControl, FormLabel, Box } from "@chakra-ui/react";

import { AiFillStar } from "react-icons/ai";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";

import { linkItems } from "../../constants/LinkItems";
import { Link, useLocation } from "react-router-dom";

const SidebarContent = (props) => {
  const minPrice = 90;
  const maxPrice = 300;
  const step = 1;
  const { onClick, ...rest } = props;
  const [sliderValue, setSliderValue] = React.useState([minPrice, maxPrice]);

  const CategoryName = ({ name }) => {
    return (
      <>
        <Text fontWeight={"semibold"}>{name}</Text>
      </>
    );
  };

  const Categories = () => {
    const location = useLocation();
    const [loc, setLoc] = React.useState(location.pathname);

    React.useEffect(() => {
      setLoc(location.pathname);
    }, [location]);

    return (
      <Box w={"90%"}>
        <CategoryName name={"Kategoriler"} />

        {linkItems.map((link, i) => (
          <Box key={i} pb={1}>
            <Link to={link.href}> {link.label}</Link>
            {loc === link.href
              ? link.childrens.map((children, j) => (
                  <Box key={j} pb={1} pl={3}>
                    <Link to={children.href}> {children.label}</Link>
                  </Box>
                ))
              : ""}
          </Box>
        ))}
      </Box>
    );
  };
  const PriceRange = () => {
    return (
      <Box w={"90%"}>
        <CategoryName name={"Fiyat Aralığı"} />

        <RangeSlider
          defaultValue={sliderValue}
          min={minPrice}
          max={maxPrice}
          step={step}
          onChangeEnd={(val) => setSliderValue(val)}
        >
          <RangeSliderTrack bg="red.100">
            <RangeSliderFilledTrack bg="red.500" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} />
          <RangeSliderThumb boxSize={6} index={1} />
        </RangeSlider>

        <Flex justifyContent={"space-between"} w={"95%"}>
          <Text fontSize={"sm"}>{sliderValue[0]}</Text>
          <Text fontSize={"sm"}>{sliderValue[1]}</Text>
        </Flex>
      </Box>
    );
  };

  const EvaluationScore = () => {
    return (
      <>
        <Box w={"90%"}>
          <CategoryName name={"Değerlendirme Puanı"} />
          <RadioGroup defaultValue="2">
            <Stack spacing={5} direction="column">
              <Radio colorScheme="pink" value="1">
                <Flex justifyContent={"center"} textAlign={"center"}>
                  <Icon as={AiFillStar} color={"yellow.400"} />
                  <Text> 4 yıldız ve üzeri</Text>
                </Flex>
              </Radio>
              <Radio colorScheme="pink" value="2">
                <Flex>
                  <Icon as={AiFillStar} color={"yellow.400"} />{" "}
                  <Text>3 yıldız ve üzeri</Text>
                </Flex>
              </Radio>
              <Radio colorScheme="pink" value="3">
                <Flex>
                  <Icon as={AiFillStar} color={"yellow.400"} />{" "}
                  <Text>2 yıldız ve üzeri</Text>
                </Flex>
              </Radio>
              <Radio colorScheme="pink" value="4">
                <Flex>
                  <Icon as={AiFillStar} color={"yellow.400"} />{" "}
                  <Text>1 yıldız ve üzeri</Text>
                </Flex>
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </>
    );
  };

  const BodySize = () => {
    return (
      <>
        <CategoryName name={"Beden"} />
        <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="column">
            <Radio colorScheme="pink" value="1">
              36
            </Radio>
            <Radio colorScheme="pink" value="2">
              38
            </Radio>
            <Radio colorScheme="pink" value="3">
              40
            </Radio>
            <Radio colorScheme="pink" value="4">
              42
            </Radio>
            <Radio colorScheme="pink" value="5">
              44
            </Radio>
            <Radio colorScheme="pink" value="6">
              46
            </Radio>
            <Radio colorScheme="pink" value="7">
              48
            </Radio>
          </Stack>
        </RadioGroup>
      </>
    );
  };

  const Colors = () => {
    return (
      <>
        <CategoryName name={"Renkler"} />

        <CheckboxGroup>
          <Stack spacing={[1]} direction={["column"]}>
            <Checkbox size="md" value="Siyah">
              <Flex textAlign={"center"} ml={1}>
                <Box
                  w={5}
                  h={5}
                  borderRadius={"50% 50%"}
                  bg={"black"}
                  border={"1px #000 solid"}
                  mr={1}
                />
                Siyah
              </Flex>
            </Checkbox>
            <Checkbox size="md" value="Beyaz">
              <Flex textAlign={"center"} ml={1}>
                <Box
                  w={5}
                  h={5}
                  borderRadius={"50% 50%"}
                  bg={"white"}
                  border={"1px #000 solid"}
                  mr={1}
                />
                Beyaz
              </Flex>
            </Checkbox>
            <Checkbox size="md" value="Yeşil">
              <Flex textAlign={"center"} ml={1}>
                <Box
                  w={5}
                  h={5}
                  borderRadius={"50% 50%"}
                  bg={"green"}
                  border={"1px #000 solid"}
                  mr={1}
                />
                Yeşil
              </Flex>
            </Checkbox>
            <Checkbox size="md" value="Kırmızı">
              <Flex textAlign={"center"} ml={1}>
                <Box
                  w={5}
                  h={5}
                  borderRadius={"50% 50%"}
                  bg={"red"}
                  border={"1px #000 solid"}
                  mr={1}
                />
                Kırmızı
              </Flex>
            </Checkbox>
            <Checkbox size="md" value="Mavi">
              <Flex textAlign={"center"} ml={1}>
                <Box
                  w={5}
                  h={5}
                  borderRadius={"50% 50%"}
                  bg={"blue"}
                  border={"1px #000 solid"}
                  mr={1}
                />
                Mavi
              </Flex>
            </Checkbox>
          </Stack>
        </CheckboxGroup>
      </>
    );
  };

  const CouponProduct = () => {
    return (
      <Text fontWeight={"semibold"} as="h4">
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="coupon-products" mb="0">
            Kuponlu Ürünler
          </FormLabel>
          <Switch id="coupon-products" colorScheme="pink" />
        </FormControl>
      </Text>
    );
  };
  const DiscountedProduct = () => {
    return (
      <Text fontWeight={"semibold"} as="h4">
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="discount-products" mb="0">
            İndirimli Ürünler
          </FormLabel>
          <Switch id="discount-products" colorScheme="pink" />
        </FormControl>
      </Text>
    );
  };
  const DiscountInCart = () => {
    return (
      <Text fontWeight={"semibold"} as="h4">
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="campaign-products" mb="0">
            Sepette Kampanyalı Ürünler
          </FormLabel>
          <Switch id="campaign-products" colorScheme="pink" />
        </FormControl>
      </Text>
    );
  };

  return (
    <>
      <Box {...rest}>
        <VStack m={2}>
          <Categories />
          <PriceRange />
          <EvaluationScore />
          <BodySize />
          <Colors />
          <CouponProduct />
          <DiscountedProduct />
          <DiscountInCart />
        </VStack>
      </Box>
    </>
  );
};

const Sidebar = ({ isOpen, variant, onClose }) => {
  const borderVariant = {
    css: {
      borderRadius: "10px 10px",
      border: "1px solid",
    },
  };
  return variant === "sidebar" ? (
    <Box overflow={"auto"} w="200px" h={"100%"} {...borderVariant}>
      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="bottom" size={"sm"} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Flex>
              <SidebarContent onClick={onClose} />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;

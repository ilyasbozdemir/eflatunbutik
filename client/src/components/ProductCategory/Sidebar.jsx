import React from "react";
import {
  Text,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  useColorMode,
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
import { Flex, Grid, Spacer } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";

const SidebarContent = (props) => {
  const { onClick, ...rest } = props;
  const [sliderValue, setSliderValue] = React.useState([120, 240]);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const CategoryName = ({ name }) => {
    return (
      <>
        <Text fontWeight={"semibold"}  >
          {name}
        </Text>
      </>
    );
  };

  const Categories = () => {
    return (
      <Box>
        <CategoryName name={"Kategoriler"} />

        {"{CategoryList}"}
      </Box>
    );
  };
  const PriceRange = () => {
    return (
      <Box>
        <CategoryName name={"Fiyat Aralığı"} />

        <RangeSlider
          defaultValue={sliderValue}
          min={0}
          max={300}
          step={5}
          onChangeEnd={(val) => setSliderValue(val)}
        >
          <RangeSliderTrack bg="red.100">
            <RangeSliderFilledTrack bg="pink" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} />
          <RangeSliderThumb boxSize={6} index={1} />
        </RangeSlider>

        <Flex justifyContent={"space-between"}>
          <Text>En Düşük :{sliderValue[0]}</Text>
          <Text>En Yüksek :{sliderValue[1]}</Text>
        </Flex>
      </Box>
    );
  };

  const EvaluationScore = () => {
    return (
      <Box>
        <CategoryName name={"Değerlendirme Puanı"} />

        <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="column">
            <Radio colorScheme="pink" value="1">
              <Flex>
                <Icon as={AiFillStar} color={"yellow.400"} /> 4 yıldız ve üzeri
              </Flex>
            </Radio>
            <Radio colorScheme="pink" value="2">
              <Flex>
                <Icon as={AiFillStar} color={"yellow.400"} /> 3 yıldız ve üzeri
              </Flex>
            </Radio>
            <Radio colorScheme="pink" value="3">
              <Flex>
                <Icon as={AiFillStar} color={"yellow.400"} /> 2 yıldız ve üzeri
              </Flex>
            </Radio>
            <Radio colorScheme="pink" value="4">
              <Flex>
                <Icon as={AiFillStar} color={"yellow.400"} /> 1 yıldız ve üzeri
              </Flex>
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
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
        <VStack>
          <Categories />
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
    <Box w="200px" h={"100%"} {...borderVariant}>
      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="bottom" size={"sm"} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo />
          </DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;

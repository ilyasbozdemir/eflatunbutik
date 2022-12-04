import React from "react";

import {
  Text,
  Breadcrumb,
  BreadcrumbItem,
  Icon,
  Divider,
  Center,
  Stack,
  FormControl,
  FormLabel,
  Box,
} from "@chakra-ui/react";

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

import { Link } from "react-router-dom";

import Product from "../components/Product";
import { IoMdArrowDropright } from "react-icons/io";

import {
  Drawer,
  DrawerContent,
  useDisclosure ,
} from "@chakra-ui/react";



function CategoryProduct(props) {
  const { breadcrumbs, categoryData } = props;

  const [sliderValue, setSliderValue] = React.useState([120, 240]);
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <>
      <Flex direction={"row"} p={2}>
        {/*
         Kategorile0r Beden Renk Fiyat Aralığı*/}
        <Grid
          as="aside"
          width={"270px"}
          borderRadius={"5% 5%"}
          border={"2px #000 solid"}
          p={2}
          h={"100%"}
          boxShadow={`rgba(0, 0, 0, 0.25) 0px 54px 55px,
             rgba(0, 0, 0, 0.12) 0px -12px 30px,
             rgba(0, 0, 0, 0.12) 0px 4px 6px,
             rgba(0, 0, 0, 0.17) 0px 12px 13px`}
        >
          <Text textAlign={"center"}>{"'x'"} ürün listeleniyor</Text>
          <Divider />
          <Center>
            <Text fontWeight={"semibold"} as="h4">
              Seçili filtreler('x')
            </Text>
          </Center>
          {"{SelectedList}"}
          <Center>
            <Text
              as={Link}
              fontWeight={"semibold"}
              _hover={{ colorScheme: "orange.500" }}
            >
              Temizle
            </Text>
          </Center>
          <Divider />
          <Center>
            <Text fontWeight={"semibold"} as="h4">
              Kategoriler
            </Text>
          </Center>
          {"{CategoryList}"}
          <Divider />
          <Center>
            <Text fontWeight={"semibold"} as="h4">
              Fiyat Aralığı
            </Text>
          </Center>

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

          <Center>
            <Text fontWeight={"semibold"} as="h4">
              Değerlendirme Puanı
            </Text>
          </Center>
          <RadioGroup defaultValue="2">
            <Stack spacing={5} direction="column">
              <Radio colorScheme="pink" value="1">
                <Flex>
                  <Icon as={AiFillStar} color={"yellow.400"} /> 4 yıldız ve
                  üzeri
                </Flex>
              </Radio>
              <Radio colorScheme="pink" value="2">
                <Flex>
                  <Icon as={AiFillStar} color={"yellow.400"} /> 3 yıldız ve
                  üzeri
                </Flex>
              </Radio>
              <Radio colorScheme="pink" value="3">
                <Flex>
                  <Icon as={AiFillStar} color={"yellow.400"} /> 2 yıldız ve
                  üzeri
                </Flex>
              </Radio>
              <Radio colorScheme="pink" value="4">
                <Flex>
                  <Icon as={AiFillStar} color={"yellow.400"} /> 1 yıldız ve
                  üzeri
                </Flex>
              </Radio>
            </Stack>
          </RadioGroup>
          <Divider />

          <Center>
            <Text fontWeight={"semibold"} as="h4">
              Beden
            </Text>
          </Center>
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
          <Divider />
          <Center>
            <Text fontWeight={"semibold"} as="h4">
              Renkler
            </Text>
          </Center>

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

          <Divider />

          <Text fontWeight={"semibold"} as="h4">
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="coupon-products" mb="0">
                Kuponlu Ürünler
              </FormLabel>
              <Switch id="coupon-products" colorScheme="pink" />
            </FormControl>
          </Text>
          <Divider />
          <Text fontWeight={"semibold"} as="h4">
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="discount-products" mb="0">
                İndirimli Ürünler
              </FormLabel>
              <Switch id="discount-products" colorScheme="pink" />
            </FormControl>
          </Text>
          <Divider />
          <Text fontWeight={"semibold"} as="h4">
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="campaign-products" mb="0">
                Sepette Kampanyalı Ürünler
              </FormLabel>
              <Switch id="campaign-products" colorScheme="pink" />
            </FormControl>
          </Text>
          <Divider />
        </Grid>

        <Grid width={"calc(100% - 270px)"}>
          <Flex textAlign={"center"} mt={2} ml={2}>
            <Breadcrumb
              separator={<Icon as={IoMdArrowDropright} color="gray.500" />}
            >
              {breadcrumbs.map((breadcrumb, i) => (
                <BreadcrumbItem isCurrentPage={breadcrumb.isCurrentPage}>
                  {breadcrumb.isCurrentPage === true ? (
                    <Text>{breadcrumb.item}</Text>
                  ) : (
                    <Link to={breadcrumb.link}>{breadcrumb.item}</Link>
                  )}
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
          </Flex>

          <Product categoryData={categoryData} />
        </Grid>
        <Spacer />
      </Flex>
    </>
  );
}

export default React.memo(CategoryProduct);

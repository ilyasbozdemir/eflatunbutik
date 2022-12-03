import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { CiMoneyCheck1 } from "react-icons/ci";
import { HiOutlineUserAdd } from "react-icons/hi";
import { GiClick } from "react-icons/gi";
import { BsBasket3 } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import {
  Text,
  Flex,
  Stack,
  HStack,
  Icon,
  Alert,
  AlertIcon,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SalesChart from "../../components/Dashboard/Charts/SalesChart";
import SalesOrdersChart from "../../components/Dashboard/Charts/SalesOrdersChart";
import EnvanterChart from "../../components/Dashboard/Charts/EnvanterChart";

import SearchTermsTable from "../../components/Dashboard/Table/SearchTermsTable";

import WeatherForecast from "../../components/Dashboard/WeatherForecast/WeatherForecast ";

const infoArr = [
  {
    icon: BiShoppingBag,
    color: "teal.500",
    color2: "teal.400",
    title: "Sipariş Adedi",
    count: 750,
  },
  {
    icon: MdOutlineSell,
    color: "cyan.500",
    color2: "cyan.400",
    title: "Toplam Satış",
    count: 250,
  },
  {
    icon: CiMoneyCheck1,
    color: "red.500",
    color2: "red.400",
    title: "Toplam  Ciro",
    count: "₺123700",
  },
  {
    icon: HiOutlineUserAdd,
    color: "orange.500",
    color2: "orange.400",
    title: "Yeni Kullanıcı",
    count: 350,
  },
  {
    icon: BsBasket3,
    color: "purple.500",
    color2: "purple.400",
    title: "Unutulmuş Sepet Adedi",
    count: 154,
  },
  {
    icon: GiClick,
    color: "blue.500",
    color2: "blue.400",
    title: "Ziyaretçi",
    count: 530,
  },
];
const Item = (props) => {
  const { icon, color, color2, title, count } = props;
  return (
    <>
      <GridItem
        bg={color}
        color={"#fff"}
        borderRadius={"10px 10px"}
        boxShadow={
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -2px 2px"
        }
        w="100%"
        h="100"
      >
        <HStack justifyContent={"space-between"} mx={1}>
          <Text
            fontSize={{ base: 28, lg: 30 }}
            fontWeight={"semibold"}
            fontFamily={"sans-serif"}
          >
            {count}
          </Text>
          <Icon as={icon} fontSize={{ base: 30, lg: 35 }} color={color2} />
        </HStack>
        <HStack justifyContent={"center"}>
          <Text 
          fontSize={{ base: 20, lg: 20 }}
           fontFamily={"corbel"}
           wordBreak={'break-word'}
           >
            {title}
          </Text>
        </HStack>
      </GridItem>
    </>
  );
};

function DashboardMain() {
  const [value, onChange] = React.useState(new Date());
  React.useEffect(() => {}, [value]);
  return (
    <>
      <Stack>
        <Grid
          mt={3}
          templateColumns={"repeat(auto-fit, minmax(200px,1fr))"}
          gap={10}
        >
          {infoArr.map((element, index) => (
            <Item key={index} {...element} />
          ))}
        </Grid>

        <Grid
          mt={3}
          templateColumns={"repeat(auto-fit, minmax(350px,1fr))"}
          gap={10}
        >
          <GridItem mt={3}>
            <Flex
              direction={{ base: "column", lg: "row" }}
              justifyContent={{ base: "center", lg: "space-between" }}
            >
              <Box
                bg={"#fff"}
                boxShadow={
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -2px 2px"
                }
                width={350}
                height={300}
                borderRadius={"10px 10px"}
              >
                <Text
                  justifyContent={"center"}
                  textAlign={"center"}
                  fontFamily={"corbel"}
                  fontSize={"20px"}
                  borderBottom={"2px solid black"}
                >
                  Hava Durumu
                </Text>
                <WeatherForecast width={348} height={272} />
              </Box>
              <Box
                bg={"#fff"}
                boxShadow={
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -2px 2px"
                }
                width={350}
                height={300}
                borderRadius={"10px 10px"}
              >
                <Text
                  justifyContent={"center"}
                  textAlign={"center"}
                  fontFamily={"corbel"}
                  fontSize={"20px"}
                  borderBottom={"2px solid black"}
                >
                  Takvim
                </Text>
                <Calendar
                  onChange={onChange}
                  value={value}
                  activeStartDate={value}
                />
              </Box>
            </Flex>
          </GridItem>

          <Alert status="info" borderRadius={"10px 10px"}>
            <AlertIcon />
            Grafikler aşağıda listelenmiştir.
          </Alert>
          <GridItem
            bg={"#fff"}
            boxShadow={
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -2px 2px"
            }
            height={"100%"}
            borderRadius={"10px 10px"}
          >
            <Flex justifyContent={"center"}>
              <SalesChart />
            </Flex>
          </GridItem>
          <GridItem
            bg={"#fff"}
            boxShadow={
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -2px 2px"
            }
            height={"100%"}
            borderRadius={"10px 10px"}
          >
            <Flex justifyContent={"center"}>
              <SalesOrdersChart />
            </Flex>
          </GridItem>
          <GridItem
            bg={"#fff"}
            boxShadow={
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -2px 2px"
            }
            borderRadius={"10px 10px"}
          >
            <Flex justifyContent={"center"}>
              <EnvanterChart />
            </Flex>
          </GridItem>
        </Grid>

        {/*
      <Text>Son Siparişler</Text>
      <Text>Hava Durumu </Text>
      <Text>Son Eklenen Ürünler</Text>
      <Text>Favoriye alınan ürünler</Text>
      <Text>Unutulan sepetler</Text>
      <Text>aktif kullanıcılar</Text>
      */}
      </Stack>
    </>
  );
}

export default DashboardMain;

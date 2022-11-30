import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineUserAdd } from "react-icons/hi";

import { Text, Flex, Stack, VStack } from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SalesChart from "../../components/Dashboard/Charts/SalesChart";
import SalesOrdersChart from "../../components/Dashboard/Charts/SalesOrdersChart";
import EnvanterChart from "../../components/Dashboard/Charts/EnvanterChart";


const infoArr = [
  {
    icon: BiShoppingBag,
    color: "teal.500",
    color2: "teal.400",
    title: "Sipariş",
    count: 10,
  },
  {
    icon: HiOutlineUserAdd,
    color: "orange.500",
    color2: "orange.400",
    title: "Yeni Kullanıcı",
    count: 20,
  },
  {
    icon: HiOutlineUserAdd,
    color: "purple.500",
    color2: "purple.400",
    title: "Ziyaretçi",
    count: 45,
  },
  {
    icon: null,
    color: "gray.500",
    color2: "gray.400",
    title: "Sipariş",
    count: 10,
  },
];
const InfoBox = (props) => {
  const { icon, color, color2, title, count } = props;
  return (
    <>
      <Stack
        justifyContent={"space-around"}
        width={{ base: "100%", md: "150px" }}
        height={{ base: "130px" }}
        py={{
          base: "8",
          md: "12",
        }}
        px={{
          base: "4",
          md: "8",
        }}
        bg={color}
        borderRadius={"10px 10px"}
        boxShadow={
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -4px 5px"
        }
      >
        <VStack>
          <Text
            fontSize={30}
            fontWeight={"semibold"}
            color={"#fff"}
            fontFamily={"sans-serif"}
          ></Text>
          <Text
            fontSize={20}
            fontWeight={"semibold"}
            color={"#fff"}
            fontFamily={"sans-serif"}
          ></Text>
        </VStack>
      </Stack>
    </>
  );
};

function DashboardMain() {
  const [value, onChange] = React.useState(new Date());
  return (
    <>
      <Stack>
        <Flex
          direction={{ base: "column", md: "row" }}
          spacing="8"
          justifyContent={"space-between"}
          alignContent={"center"}
          m={5}
        >
          {infoArr.map((element, index) => (
            <InfoBox key={index} {...element} />
          ))}
        </Flex>

        <Flex
          p={3}
          direction={{ base: "column", lg: "row" }}
          justifyContent={{ base: "space-between", lg: "space-between" }}
        >
          <Text>[To Do App List]</Text>
          <Calendar onChange={onChange} value={value} activeStartDate={value} />
        </Flex>

        <Flex p={3} direction={'column'} m={2}>
          <SalesChart />
          <SalesOrdersChart />
          <EnvanterChart/>
          
        </Flex>
        {/*
      <Text>Son Siparişler</Text>
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

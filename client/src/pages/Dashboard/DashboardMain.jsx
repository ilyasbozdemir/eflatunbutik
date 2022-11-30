import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineUserAdd } from "react-icons/hi";
import { GiClick } from "react-icons/gi";
import { BsBasket3 } from "react-icons/bs";

import {
  Text,
  Flex,
  Stack,
  HStack,
  VStack,
  Icon,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SalesChart from "../../components/Dashboard/Charts/SalesChart";
import SalesOrdersChart from "../../components/Dashboard/Charts/SalesOrdersChart";
import EnvanterChart from "../../components/Dashboard/Charts/EnvanterChart";
import SearchTermsTable from "../../components/Dashboard/Table/SearchTermsTable";

const infoArr = [
  {
    icon: BiShoppingBag,
    color: "teal.500",
    color2: "teal.300",
    title: "Sipariş Adedi",
    count: 10,
  },
  {
    icon: HiOutlineUserAdd,
    color: "orange.500",
    color2: "orange.300",
    title: "Yeni Kullanıcı",
    count: 20,
  },
  {
    icon: BsBasket3,
    color: "purple.500",
    color2: "purple.300",
    title: "Unutulmuş Sepet Adedi",
    count: 45,
  },
  {
    icon: GiClick,
    color: "gray.500",
    color2: "gray.300",
    title: "Ziyaretçi",
    count: 10,
  },
];
const InfoBox = (props) => {
  const { icon, color, color2, title, count } = props;
  return (
    <>
      <Stack
        display={"relative"}
        justifyContent={"space-around"}
        width={{ base: "100%", md: "150px" }}
        height={{ base: "130px" }}
        bg={color}
        color={"white"}
        borderRadius={"10px 10px"}
        boxShadow={
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -2px 2px"
        }
      >
        <HStack justifyContent={"space-between"} mx={1}>
          <Text fontSize={30} fontWeight={"semibold"} fontFamily={"sans-serif"}>
            {count}
          </Text>
          <Icon
            as={icon}
            fontSize={35}
            fontWeight={"semibold"}
            fontFamily={"sans-serif"}
            color={color2}
          />
        </HStack>
        <HStack justifyContent={"center"}>
          <Text fontSize={20} fontFamily={"corbel"}>
            {title}
          </Text>
        </HStack>
      </Stack>
    </>
  );
};

function DashboardMain() {
  const [value, onChange] = React.useState(new Date());
  React.useEffect(() => {}, [value]);
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
          <Text>[To Do Component Gelcek]</Text>
          <Calendar onChange={onChange} value={value} activeStartDate={value} />
        </Flex>

        <Flex p={3} direction={"column"} m={1}>
          <Alert status="info">
            <AlertIcon />
            Grafikler aşağıda listelenmiştir.
          </Alert>
          <SalesChart />
          <SalesOrdersChart />
          <EnvanterChart />
        </Flex>
        <Flex p={3} direction={"column"} m={1}>
          <Alert status="info" justifyContent={'center'}>
            <AlertIcon />
            En çok aranan terim raporunu anlık olarak aşağıda
            görüntüleyebilirsiniz
          </Alert>
          <SearchTermsTable />
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

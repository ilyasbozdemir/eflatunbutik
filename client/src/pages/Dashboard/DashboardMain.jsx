import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineUserAdd } from "react-icons/hi";

import { Box, Flex, Text, Icon } from "@chakra-ui/react";

const infoArr = [
  {
    icon: BiShoppingBag,
    color: "blue.500",
    bg: "blue.400",
    title: "Sipariş",
    count: 10,
  },
  {
    icon: HiOutlineUserAdd,
    bg: "yellow.400",
    color: "yellow.500",
    title: "Yeni Kullanıcı",
    count: 20,
  },
  {
    icon: HiOutlineUserAdd,
    bg: "green.400",
    color: "green.500",
    title: "Ziyaretçi",
    count: 45,
  },
];
const InfoBox = (props) => {
  const { icon, color, title, count, bg } = props;
  return (
    <>
      <Box
        bg={bg}
        color={"white"}
        p={4}
        m={4}
        width={"200px"}
        height={"100px"}
        borderRadius={"10px 10px"}
        boxShadow={
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -4px 5px"
        }
      >
        <Box
          bg={bg}
          color={"white"}
          width={"35px"}
          height={"35px"}
          borderRadius={"10px 10px"}
          boxShadow={
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
          }
        >
          <Icon as={icon} fontSize="25px"  />
        </Box>

        <Text display={"relative"} top={"5px"} right={"5px"}>
          {title}
        </Text>
        <Text>{count}</Text>
      </Box>
    </>
  );
};

function DashboardMain() {
  return (
    <>
      <Flex direction={"row"} justifyContent={'center'} alignContent={'center'}>
        {infoArr.map((element, index) => (
          <InfoBox key={index} {...element} />
        ))}
      </Flex>
    </>
  );
}

export default DashboardMain;

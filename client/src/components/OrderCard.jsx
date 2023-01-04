import React from "react";

import { BsInfoSquare } from "react-icons/bs";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Text,
  IconButton,
  Flex,
} from "@chakra-ui/react";
function OrderCard(props) {
  /*  {
      orderNumber: "123324234",
      name: "ilyas",
      surname: "bozdemir",
      orderState: "İptal Edildi",
      cargoState: "Kargo Bekliyor",
      orderDate: "4.01.2023 19:41:01",
      total: "95,00 TL",
      detailPageLink:'/hesabim/siparis/:generalOrderNumber/'
    },
  */
  return (
    <>
      <Card
        w={{ base: "100%", md: 200 }}
        maxH={{ base: "100%", md: 300 }}
        m={1}
      >
        <CardHeader fontWeight={"semibold"}>
          <Flex justifyContent={"space-between"}>
            <Text> {props.orderNumber}</Text>
            <IconButton
              colorScheme="pink"
              aria-label="edit address"
              icon={<BsInfoSquare />}
              variant={"ghost"}
            />
          </Flex>
        </CardHeader>
        <Divider />
        <CardBody
          overflowY={"scroll"}
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#444",
              borderRadius: "12px",
            },
          }}
          fontSize={13}
        ></CardBody>
        <Divider />

        <CardFooter></CardFooter>
      </Card>
    </>
  );
}

export default OrderCard;

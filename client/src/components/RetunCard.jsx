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
  Stack,
  Box,
  Icon,
} from "@chakra-ui/react";
function RetunCard(props) {
  return (
    <>
      <Card w={{ base: "100%", md: 300 }} m={1}>
        <CardHeader fontWeight={"semibold"}>
          <Flex justifyContent={"space-between"}>
            <Text> İade Talebi #{props.id}</Text>
            <Icon
              colorScheme="pink"
              aria-label="edit address"
              as={BsInfoSquare}
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
        >
          <Stack direction={"column"} spacing={4} w="90%">
            <Flex direction={"row"} justifyContent={"space-between "}>
              <Text>Ürün :</Text>
              <Text>{props.productName}</Text>
            </Flex>
            <Flex direction={"row"} justifyContent={"space-between "}>
              <Text>Miktar :</Text>
              <Text>{props.amount}</Text>
            </Flex>

            <Flex direction={"row"} justifyContent={"space-between "}>
              <Text>Tarih :</Text>
              <Text>{props.date}</Text>
            </Flex>
            <Flex direction={"row"} justifyContent={"space-between "}>
              <Text>İade Nedeni :</Text>
              <Text fontWeight={"semibold"}>{props.reasonForReturn}</Text>
            </Flex>
            <Flex direction={"row"} justifyContent={"space-between "}>
              <Text>İade Şekli :</Text>
              <Text>{props.returnType}</Text>
            </Flex>
            <Flex direction={"row"} justifyContent={"space-between "}>
              <Text>Durum :</Text>
              <Text>{props.state}</Text>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default RetunCard;

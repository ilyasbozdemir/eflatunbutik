import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  Divider,
  Button,
  Image,
  Center,
  Flex,
  Box,
} from "@chakra-ui/react";

import { BiEdit } from "react-icons/bi";
import { IconButton } from "@chakra-ui/react";
function PaymentCard(props) {
  const { title, addressContent, editButtonClick } = props;
  const { addressTitle, addressProvince } = addressContent;
  return (
    <>
      <Card w={{ base: "100%", md: 195 }} h={{ base: "100%", md: 200 }} m={1}>
        <CardHeader fontWeight={"semibold"}>
          <Flex
            justifyContent={"space-between"}
            textAlign={"center"}
            alignContent={"center"}
          >
            <Text> {title}</Text>
            <IconButton
              colorScheme="pink"
              aria-label="edit address"
              icon={<BiEdit />}
              variant={"ghost"}
              onClick={editButtonClick}
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
        >
          <Stack spacing={3} direction={"column"}>
            <Box>{addressTitle}</Box>
            <Box>{addressProvince}</Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default PaymentCard;

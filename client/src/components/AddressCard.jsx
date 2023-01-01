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
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";
import { IconButton } from "@chakra-ui/react";
function AddressCard(props) {
  const { title, addressContent } = props;
  return (
    <>
      <Card
        w={{ base: "100%", md: 300 }}
        maxW={{ base: "100%", md: 350 }}
        maxH={{ base: "100%", md: 400 }}
        m={1}
      >
        <CardHeader fontWeight={"semibold"}>
          <Flex justifyContent={"space-between"}>
            <Text> {title}</Text>
            <IconButton
              colorScheme="pink"
              aria-label="edit address"
              icon={<BiEdit />}
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
        >
          {addressContent}
        </CardBody>
        <Divider />
        <CardFooter>
          <CheckboxGroup spacing="2">
            <Checkbox size="sm" colorScheme="pink">
              Fatura Adresi
            </Checkbox>

            <Center height="50px" p={1}>
              <Divider orientation="vertical" />
            </Center>

            <Checkbox size="sm" colorScheme="pink">
              Teslimat Adresi
            </Checkbox>
          </CheckboxGroup>
        </CardFooter>
      </Card>
    </>
  );
}

export default AddressCard;

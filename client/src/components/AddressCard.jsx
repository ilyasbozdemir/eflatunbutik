import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Divider,
  Center,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";
import { IconButton } from "@chakra-ui/react";
import { RiDeleteBin7Line } from "react-icons/ri";

function AddressCard(props) {
  const {
    title,
    addressContent,
    editButtonClick,
    delButtonClick,
    isEditMode = false,
  } = props;

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
            <Stack direction={"row"}>
              <IconButton
                colorScheme="pink"
                aria-label="edit address"
                icon={<BiEdit />}
                variant={"ghost"}
                onClick={editButtonClick}
              />
              {isEditMode === true ? (
                <IconButton
                  colorScheme="pink"
                  aria-label="delete address"
                  icon={<RiDeleteBin7Line />}
                  variant={"ghost"}
                  onClick={delButtonClick}
                />
              ) : (
                ""
              )}
            </Stack>
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
          {addressContent}
        </CardBody>
        <Divider />
        {isEditMode !== true ? (
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
        ) : (
          ""
        )}
      </Card>
    </>
  );
}

export default AddressCard;

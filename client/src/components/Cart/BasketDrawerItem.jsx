import {
  Text,
  Divider,
  Flex,
  Image,
  Stack,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Button } from "@chakra-ui/react";

import { MdDelete } from "react-icons/md";

import { MainContext, useContext } from "../../contexts/MainContext";

import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";

function BasketDrawerItem(props) {
  const { id, name, quantity, imageUrl, price } = props;
  const { setBasket } = useContext(MainContext);

  const deleteByValue = (id) => {
    setBasket((oldValues) => {
      return oldValues.filter((p) => p.id !== id);
    });
  };

  return (
    <>
      <Flex direction={"column"}>
        <>
          <Text
            css={{
              whiteSpace: "nowrap",
              textAlign: "center",
              textTransform: "uppercase",
            }}
            pb={1}
          >
            {name}
          </Text>
        </>
        <Stack direction={"row"}>
          <>
            <Image
              w={75}
              src={imageUrl}
              alt={name}
              draggable="false"
              loading="lazy"
              aspectRatio={2 / 3}
            />
          </>
          <Stack direction={"row"}>
            <TableContainer>
              <Table size="sm">
                <Tbody>
                  <Tr>
                    <Td>Birim Fiyat</Td>
                    <Td isNumeric>{price + " TL"}</Td>
                  </Tr>
                  <Tr>
                    <Td>Adet</Td>
                    <Td isNumeric>{quantity}</Td>
                  </Tr>
                  <Tr>
                    <Td>Toplam Fiyat</Td>
                    <Td isNumeric>{price * quantity + " TL"}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Text pos={"relative"} top={"35%"} left={15} cursor={"pointer"}>
              <Icon
                as={MdDelete}
                fontSize={25}
                onClick={() => {
                  deleteByValue(id);
                }}
              />
            </Text>
          </Stack>
        </Stack>
        <Divider my={2} orientation="horizontal" />
      </Flex>
    </>
  );
}

export default BasketDrawerItem;

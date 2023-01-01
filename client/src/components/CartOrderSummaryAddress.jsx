import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Heading,
  Center,
} from "@chakra-ui/react";

function CartOrderSummaryAddress() {
  return (
    <>
      <Stack
        spacing="8"
        borderWidth="1px"
        rounded="lg"
        padding="4"
        width="full"
      >
        <Center>
          <Heading size="md">Sipariş Özeti</Heading>
        </Center>
        <Stack spacing="6">
          <TableContainer>
            <Table size="sm">
              <Tbody>
                <Tr>
                  <Td>Birim Fiyat</Td>
                  <Td isNumeric>{'price' + " TL"}</Td>
                </Tr>
                <Tr>
                  <Td>Adet</Td>
                  <Td isNumeric>{'quantity'}</Td>
                </Tr>
                <Tr>
                  <Td>Toplam Fiyat</Td>
                  <Td isNumeric>{'price' * 'quantity' + " TL"}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    </>
  );
}

export default CartOrderSummaryAddress;

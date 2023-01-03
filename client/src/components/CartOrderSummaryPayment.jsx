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
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

function CartOrderSummaryPayment() {
  const [orderNumber, setOrderNumber] = React.useState("");

  const navigate = useNavigate();
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
                  <Td isNumeric>{"price" + " TL"}</Td>
                </Tr>
                <Tr>
                  <Td>Adet</Td>
                  <Td isNumeric>{"quantity"}</Td>
                </Tr>
                <Tr>
                  <Td>Toplam Fiyat</Td>
                  <Td isNumeric>{"price" * "quantity" + " TL"}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Button
            width="95%"
            variant="primary"
            color={"white"}
            bg={useColorModeValue("gray.100", "gray.700")}
            bgGradient={"linear(to-l, #7928CA, #FF0080)"}
            _hover={{
              opacity: 0.9,
            }}
            cursor={"pointer"}
            onClick={() => {
              navigate("/siparis/tamamlandi/" + orderNumber);
            }}
          >
            Siparişi Tamamla
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

export default CartOrderSummaryPayment;

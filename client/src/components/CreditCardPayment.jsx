import {
  Box,
  Flex,
  FormControl,
  Input,
  Stack,
  VStack,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import CardNumberInput from "./CardNumberInput";
import CVCInput from "./CVCInput";
import DateInput from "./DateInput";
import { VscAccount } from "react-icons/vsc";

function CreditCardPayment() {
  return (
    <>
      <Flex direction={"column"}>
        <Flex direction={"row"} spacing={7}>
          <VStack>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={VscAccount} color="gray.500" />}
                />
                <Input placeholder="Kart Sahibi" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <CardNumberInput />
            </FormControl>
            <FormControl>
              <DateInput />
            </FormControl>
            <FormControl>
              <CVCInput />
            </FormControl>
          </VStack>
          <VStack>
            <Box className="card">
              <Box className="front">
                
              </Box>
              <Box className="back">arka</Box>
            </Box>
          </VStack>
        </Flex>
        <Box as="small" my="4">
          <Box fontWeight={"semibold"} as="p">
            Bilgilendirme,
          </Box>
          <Box as="p">
            Sistemimizde yapacağınız alışveriş, %100 şifrelenmiş ve güvenlidir.
            Kart bilgileriniz sadece siz ve banka arasındadır.
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default CreditCardPayment;

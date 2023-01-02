import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Text,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function CreditCardPayment() {
  return (
    <>
      <Flex>
        <Stack direction={"row"} spacing={5}>
          <VStack>
            <FormControl>
              <Input size="sm" />
            </FormControl>
            <FormControl>
              <Input size="sm" />
            </FormControl>
            <FormControl>
              <Input size="sm" />
            </FormControl>
            <FormControl>
              <Input size="sm" />
            </FormControl>
          </VStack>
          <VStack>
            <Text>
              Kredi Kart Şablonu Alanı
            </Text>
          </VStack>
        </Stack>
      </Flex>
    </>
  );
}

export default CreditCardPayment;

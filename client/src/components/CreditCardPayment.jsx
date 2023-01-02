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
      <Flex direction={"column"}>
        <Stack direction={"row"} spacing={5}>
          <VStack>
            <FormControl>
              <Input size="sm" placeholder="Kart Sahibi" />
            </FormControl>
            <FormControl>
              <Input size="sm" placeholder="Kart Numarası" />
            </FormControl>
            <FormControl>
              <Input size="sm" placeholder="Son Kullanma Tarihi" />
            </FormControl>
            <FormControl>
              <Input size="sm" placeholder="CVV" />
            </FormControl>
          </VStack>
          <VStack>
            <Text></Text>
          </VStack>
        </Stack>
        <Box as="small" my='4'>
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

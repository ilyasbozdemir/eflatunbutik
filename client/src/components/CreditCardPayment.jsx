import {
  Box,
  Flex,
  FormControl,
  Text,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import InputMask from "react-input-mask";
import creditCardType from "credit-card-type";

function CreditCardPayment() {
  const [cardName, setCardName] = React.useState("");

  var visaCards = creditCardType("4543");
  //alert(visaCards[0].type); // 'visa'

  //expiration date

  const InputMasked = (props) => (
    <InputMask
      mask={props.mask}
      value={props.value}
      placeholder={" "}
      onChange={props.onChange}
    >
      {(inputProps) => (
        <Input placeholder={props.placeholder} {...inputProps} type="text" />
      )}
    </InputMask>
  );

  return (
    <>
      <Flex direction={"column"}>
        <Stack direction={"row"} spacing={5}>
          <VStack>
            <FormControl></FormControl>
            <FormControl></FormControl>
            <FormControl></FormControl>
            <FormControl></FormControl>
          </VStack>
          <VStack></VStack>
        </Stack>
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

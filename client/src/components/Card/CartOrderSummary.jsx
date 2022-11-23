import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "./PriceTag";
import { Link } from "react-router-dom";
const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = () => {
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Sipariş Özeti</Heading>

      <Stack spacing="6">
        <OrderSummaryItem
          label="Ara Toplam"
          value={formatPrice(190.99 + 290.99 + 390.99)}
        />
        <OrderSummaryItem label="Kdv Toplam" value="₺69,8376"></OrderSummaryItem>
        <OrderSummaryItem label="Kargo" value="₺25"></OrderSummaryItem>
        <OrderSummaryItem label="Kupon Kodu">
          <Link>
            <Text color={"pink.500"} textDecor="underline">
              tanımla
            </Text>
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Toplam
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(190.99 + 290.99 + 390.99)}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="pink"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
      >
        Alışverişi Tamamla
      </Button>

      <Text as="small">
      Alışverişi tamamla düğmesine tıklayarak,
        <Link to="/">
          <Text color={"pink.500"}>Kullanım Koşulları</Text>
        </Link>
        'mızı kabul etmiş olursunuz.
      </Text>
    </Stack>
  );
};

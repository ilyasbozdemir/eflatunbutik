import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import CartOrderSummaryPayment from "../components/CartOrderSummaryPayment";
import { useNavigate } from "react-router";
import { FaArrowRight } from "react-icons/fa";

import PaymentCard from "../components/PaymentCard";

function ProductPayment() {
  const navigate = useNavigate();
  return (
    <>
      <Box maxW={{ base: "3xl", lg: "7xl" }}>
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
        >
          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            flex="2"
          >
            <Stack spacing="6">
              <Wrap>
                <WrapItem>
                  <PaymentCard
                    title={"title"}
                    addressContent={"addressContent"}
                    editButtonClick={"editButtonClick"}
                  />
                </WrapItem>
                <WrapItem>
                  <PaymentCard
                    title={"title"}
                    addressContent={"addressContent"}
                    editButtonClick={"editButtonClick"}
                  />
                </WrapItem>
                <WrapItem>
                  <PaymentCard
                    title={"title"}
                    addressContent={"addressContent"}
                    editButtonClick={"editButtonClick"}
                  />
                </WrapItem>
              </Wrap>
            </Stack>
          </Stack>

          <Flex direction="column" flex="1">
            <CartOrderSummaryPayment />
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
              onClick={() => {}}
            >
              Siparişi Tamamla
            </Button>
          </Flex>
        </Stack>
      </Box>
    </>
  );
}

export default ProductPayment;

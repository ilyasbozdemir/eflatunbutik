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

import PaymentCard from "../components/PaymentCard";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CreditCardPayment from "../components/CreditCardPayment";
import PayAtTheDoor from "../components/PayAtTheDoor";
function ProductPayment() {
  const navigate = useNavigate();

  const [tabIndex, setTabIndex] = React.useState(0);

  React.useEffect(() => {}, [tabIndex]);

  return (
    <>
      <Box maxW={{ base: "3xl", lg: "7xl" }} py={3}>
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
            <>
              <Wrap>
                <WrapItem>
                  <PaymentCard
                    title={"Fatura Adresi"}
                    addressContent={{
                      addressTitle: "test title ",
                      addressProvince: "Gölbaşı, Adıyaman",
                    }}
                    editButtonClick={"editButtonClick"}
                  />
                </WrapItem>
                <WrapItem>
                  <PaymentCard
                    title={"Teslimat Adresi"}
                    addressContent={{
                      addressTitle: "test title ",
                      addressProvince: "Gölbaşı, Adıyaman",
                    }}
                    editButtonClick={"editButtonClick"}
                  />
                </WrapItem>
                <WrapItem>
                  <PaymentCard
                    title={"Kargo Bilgileri"}
                    addressContent={{
                      addressTitle: "test title ",
                      addressProvince: "Gölbaşı, Adıyaman",
                    }}
                    editButtonClick={"editButtonClick"}
                  />
                </WrapItem>
              </Wrap>
            </>
            <>
              <Tabs
                my={2}
                onChange={(index) => setTabIndex(index)}
                colorScheme="pink"
                isFitted
                variant="enclosed-colored"
              >
                <TabList mb="1em">
                  <Tab>Kapıda Ödeme</Tab>
                  <Tab>Kredi Kartı</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <PayAtTheDoor />
                  </TabPanel>
                  <TabPanel>
                    <CreditCardPayment />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </>
          </Stack>

          <Flex direction="column" flex="1">
            <CartOrderSummaryPayment />
          </Flex>
        </Stack>
      </Box>
    </>
  );
}

export default ProductPayment;

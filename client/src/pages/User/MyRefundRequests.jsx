import React from "react";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import RetunCard from "../../components/RetunCard";

function MyRefundRequests() {
  const [ordersSummary, setOrdersSummary] = React.useState([
    {
      id:1,
      productName:'test ürün',
      amount:1,
      date:'21.06.2022 11:47:47',
      reasonForReturn:'Yanlış Ürün',
      returnType:' Ödeme İadesi',
      state:'Onaylandı',

    }
  ]);
  return (
    <>
      <Stack
        spacing={2}
        p={5}
        userSelect={"none"}
        pos={"relative"}
        zIndex={151}
      ></Stack>

      <Stack py={5}>
        <Wrap>
          {ordersSummary.map((orderSummary, index) => (
            <>
              <WrapItem key={index}>
                <RetunCard {...orderSummary} />
              </WrapItem>
            </>
          ))}
        </Wrap>
      </Stack>
    </>
  );
}

export default MyRefundRequests;

import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

function OrderCompleted() {
  const [lottieJson, setLottieJson] = React.useState(
    "https://assets2.lottiefiles.com/packages/lf20_fbdzhbzr.json"
  );
  const GreenCheck = () => {
    return (
      <>
        <lottie-player
          src={lottieJson}
          background="transparent"
          style={{
            width: "150px",
            height: "150px",
            margin: 'auto',

          }}
          autoplay
        ></lottie-player>
      </>
    );
  };
  const [orderNumber, setOrderNumber] = React.useState("");

  return (
    <>
      <Flex justifyContent={"center"} pos={'relative'}>
        <Stack textAlign={"center"}>
          <GreenCheck />
          <Text>Siparişiniz başarıyla oluşturulmuştur.</Text>
          <Text>Sipariş numaranız : {orderNumber} </Text>
        </Stack>
      </Flex>
    </>
  );
}

export default OrderCompleted;

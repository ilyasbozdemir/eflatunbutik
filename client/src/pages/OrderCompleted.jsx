import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";

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
            width: "200px",
            height: "200px",
            margin: "auto",
          }}
          autoplay
        ></lottie-player>
      </>
    );
  };
  const [orderNumber, setOrderNumber] = React.useState("");

  const navigate = useNavigate();
  return (
    <>
      <Flex justifyContent={"center"}>
        <Stack textAlign={"center"} w={450}>
          <GreenCheck />
          <Text>Siparişiniz başarıyla oluşturulmuştur.</Text>
          <Text fontWeight={"semibold"}>
            Sipariş numaranız : {orderNumber}{" "}
          </Text>
          <Text>
            Hesabım sayfasından sipariş detaylarınızı görüntüleyebilir, kargo
            takibinizi yapabilirsiniz.
          </Text>
          <Flex justifyContent={"center"}>
            <Stack spacing={5} direction={"row"}>
              <Button
                colorScheme={'blue'}
                onClick={() => navigate("/")}
              >
                Alışverişe Devam Et
              </Button>
              <Button
                colorScheme={'green'}
                onClick={() => navigate("/")}
              >
                Sipariş Detayı
              </Button>
            </Stack>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
}

export default OrderCompleted;

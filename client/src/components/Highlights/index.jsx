import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
function index() {
  // Sepete En Çok Eklenenler
  // En Çok Öne Çıkanlar
  // İndirimdekiler
  const cokSatanlarHandled = (e) => {
    alert("cokSatanlarHandled");
  };
  const oneCikanlarHandled = (e) => {
    alert("oneCikanlarHandled");
  };
  const indirimdekilerHandled = (e) => {
    alert("indirimdekilerHandled");
  };

  const buttons = [
    {
      name: "Çok Satanlar",
      onClickHandled: cokSatanlarHandled,
    },
    {
      name: "Öne Çıkanlar",
      onClickHandled: oneCikanlarHandled,
    },
    {
      name: "İndirimdekiler",
      onClickHandled: indirimdekilerHandled,
    },
  ];

  const HighlightButton = (props) => {
    const { name, onClickHandled } = props;
    return (
      <Button
      fontSize={12}
        color={"white"}
        bgGradient={"linear(to-l, #7928CA, #FF0080)"}
        _hover={{
          bgGradient: "linear(to-l, #7928AA, #FF0060)",
        }}
        onClick={onClickHandled}
      >
        {name}
      </Button>
    );
  };

  return (
    <Flex direction={"row"} justifyContent={"space-around"}>
      {buttons.map((button, index) => (
        <HighlightButton key={index} {...button} />
      ))}{" "}
    </Flex>
  );
}

export default index;

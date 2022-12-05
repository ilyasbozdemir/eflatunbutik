import React from "react";
import { Center, ButtonGroup } from "@chakra-ui/react";
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
      name: "En Çok Öne Çıkanlar",
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
        fontSize={{ base: "16px", md: "20px" }}
        color={"white"}
        bgGradient={"linear(to-l, #7928CA, #FF0080)"}
        _hover={{
          bgGradient: "linear(to-l, #7928AA, #FF0060)",
        }}
        onClick={onClickHandled}
        padding={5}
      >
        {name}
      </Button>
    );
  };

  return (
    <Center>
      <ButtonGroup mx={5}>
        {buttons.map((button, index) => (
          <HighlightButton key={index} {...button} />
        ))}
      </ButtonGroup>
    </Center>
  );
}

export default index;

import React from "react";
import { Text, Flex, tokenToCSSVar } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function index() {
  const buttons = [
    {
      name: "Çok Satanlar",
      to: '/cok-satanlar/',
    },
    {
      name: "Öne Çıkanlar",
      to: '/one-cikanlar/',
    },
    {
      name: "İndirimdekiler",
      to: '/indirim/',
    },
  ];

  const HighlightButton = (props) => {
    const { name, to } = props;
    return (
      <Link to={to}>
        <Button
          fontSize={12}
          color={"white"}
          bgGradient={"linear(to-l, #7928CA, #FF0080)"}
          _hover={{
            bgGradient: "linear(to-l, #7928AA, #FF0060)",
          }}
        >
          {name}
        </Button>
      </Link>
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

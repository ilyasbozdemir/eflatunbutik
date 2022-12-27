import React from "react";
import { Text, Flex, tokenToCSSVar, Spacer } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function index() {
  const buttons = [
    {
      name: "Çok Satanlar",
      to: "/cok-satanlar/",
    },
    {
      name: "Öne Çıkanlar",
      to: "/one-cikanlar/",
    },
    {
      name: "İndirimdekiler",
      to: "/indirim/",
    },
  ];

  const HighlightButton = (props) => {
    const { name, to } = props;
    return (
      <Link to={to} ml={"33%"}>
        <Button
          fontSize={{ base: 12, md: 14, xl: 15, lg: 16 }}
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
    <Flex
      direction={"row"}
      justifyContent={"space-around"}
      textAlign={"center"}
    >
      {buttons.map((button, index) => (
        <HighlightButton key={index} {...button} />
      ))}
    </Flex>
  );
}

export default index;

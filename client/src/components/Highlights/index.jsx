import React from "react";
import { Flex } from "@chakra-ui/react";
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
      <>
        <Button
          as={Link}
          to={to}
          fontSize={{ base: 14, md: 15}}
          p={{ base: 2 , md: 6}}
          color={"white"}
          bgGradient={"linear(to-l, #7928CA, #FF0080)"}
          _hover={{
            bgGradient: "linear(to-l, #7928AA, #FF0060)",
          }}
        >
          {name}
        </Button>
      </>
    );
  };

  return (
    <>
      {buttons.map((button, index) => (
        <HighlightButton key={index} {...button} />
      ))}
    </>
  );
}

export default index;

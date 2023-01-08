import React from "react";
import {
  Button,
  useColorModeValue as UseColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
function ShoppingButton() {
  return (
    <>
      <Button
        variant="primary"
        color={"white"}
        bg={UseColorModeValue("gray.100", "gray.700")}
        bgGradient={"linear(to-l, #7928CA, #FF0080)"}
        _hover={{
          opacity:'.8'
        }}
        as={Link}
        to={"/"}
      >
        Alışverişe Başla
      </Button>
    </>
  );
}

export default ShoppingButton;

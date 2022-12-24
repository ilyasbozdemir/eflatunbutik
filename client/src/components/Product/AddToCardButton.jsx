import React from "react";
import {
  Button,
  useColorModeValue as UseColorModeValue,
} from "@chakra-ui/react";
function AddToCardButton({ product }) {
  const { id } = product;
  return (
    <>
      <Button
        width="full"
        variant="primary"
        color={"white"}
        bg={UseColorModeValue("gray.100", "gray.700")}
        bgGradient={"linear(to-l, #7928CA, #FF0080)"}
        _hover={{
          opacity: 0.9,
        }}
        onClick={() => alert(id)}
      >
        Sepete Ekle
      </Button>
    </>
  );
}

export default AddToCardButton;

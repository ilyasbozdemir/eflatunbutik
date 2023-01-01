import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Textarea } from "@chakra-ui/react";
function CartNote() {
  let [value, setValue] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <>
      <Stack>
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder="Sipariş notunuz  varsa giriniz."
          size="sm"
          maxH={250}
        />
      </Stack>
    </>
  );
}

export default CartNote;

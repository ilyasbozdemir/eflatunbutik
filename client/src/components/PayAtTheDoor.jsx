import { Box, Checkbox, Text } from "@chakra-ui/react";
import React from "react";

function PayAtTheDoor() {
  const [checkedItem, setCheckedItem] = React.useState(true);
  return (
    <>
      <Box>
        <Text fontWeight={"semibold"}>Kapıda Ödeme Seçenekleri</Text>

        <Checkbox
          size="sm"
          colorScheme="pink"
          isChecked={checkedItem}
          onChange={(e) => setCheckedItem(true)}
        >
          Kapıda Nakit Ödeme Ücretsiz
        </Checkbox>
      </Box>
    </>
  );
}

export default PayAtTheDoor;

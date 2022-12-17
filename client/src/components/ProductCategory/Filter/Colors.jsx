import React from "react";
import { Text, Flex, Box } from "@chakra-ui/react";

import { AiOutlineCheck } from "react-icons/fa";
const CategoryName = ({ name }) => {
  return (
    <>
      <Text fontWeight={"semibold"} fontFamily={"system-ui, sans-serif"}>
        {name}
      </Text>
    </>
  );
};
const GetColorCheckbox = ({ name }) => {
  return (
    <>
      <Box
        size="md"
        name={name}
        data-value={name}
        onClick={(e) => {
          alert(e.target.dataset.value);
        }}
        w={5}
        h={5}
        borderRadius={"50% 50%"}
        bg={name}
        border={"1px #000 solid"}
        mx={1}
        cursor={"pointer"}
      />
    </>
  );
};

const Colors = ({ colors }) => {
  React.useEffect(() => {}, [colors]);
  return (
    <Box w={"100%"} fontFamily={"corbel"}>
      <CategoryName name={"Renk"} />

      <Flex direction={["row"]}>
        {colors.map((color, index) => (
          <>
            <GetColorCheckbox id={`color_${index}`} key={index} name={color} />
          </>
        ))}
      </Flex>
    </Box>
  );
};
export default Colors;

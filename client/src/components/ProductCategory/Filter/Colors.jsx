import React from "react";
import { Text, Flex, Box } from "@chakra-ui/react";

import { AiOutlineCheck } from "react-icons/fa";

const GetColorCheckbox = ({ name }) => {
  return <></>;
};

const Colors = ({ colors }) => {
  React.useEffect(() => {}, [colors]);
  return (
    <Box w={"100%"} fontFamily={"corbel"}>
      <Text
        fontWeight={"semibold"}
        fontFamily={"system-ui, sans-serif"}
        children={"Renk"}
      />
    </Box>
  );
};
export default Colors;

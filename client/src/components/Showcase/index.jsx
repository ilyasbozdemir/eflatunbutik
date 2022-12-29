import React from "react";
import { Flex } from "@chakra-ui/react";
import Showcase1 from "./Showcase1";
import Showcase2 from "./Showcase2/Showcase2";

function index() {
  return (
    <Flex direction={"column"} mb={3}>
      <Showcase1 />
      <Showcase2 />
    </Flex>
  );
}

export default index;

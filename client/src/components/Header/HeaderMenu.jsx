import React from "react";
import Navbar from "../Navbar";
import { Flex } from "@chakra-ui/react";

import { linkItems } from "../../../src/constants/LinkItems";

function HeaderMenu() {
  return (
    <>
      <Flex w={'100%'}>
        {linkItems.map((link, i) => (
          <Navbar key={i} link={link} />
        ))}
      </Flex>
    </>
  );
}

export default HeaderMenu;

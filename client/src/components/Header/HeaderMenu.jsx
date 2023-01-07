import React from "react";
import Navbar from "../Navbar";
import { Flex } from "@chakra-ui/react";

import { linkItems } from "../../../src/constants/LinkItems";

function HeaderMenu() {
  return (
    <>
      <Flex w={'100%'} h={50}>
        {linkItems.map((link, i) => (
          <Navbar key={'eb_'+i} link={link} />
        ))}
      </Flex>
    </>
  );
}

export default HeaderMenu;

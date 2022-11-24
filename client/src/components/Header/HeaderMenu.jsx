import React from "react";
import Navbar from "../Navbar";
import { Flex,Box } from "@chakra-ui/react";

import { linkItems } from "../../../src/constants/LinkItems";

function HeaderMenu() {
  return (
    <>
      <Flex>
        {linkItems.map((link, i) => (
          <Navbar key={i} link={link} />
        ))}
      </Flex>
    </>
  );
}

export default HeaderMenu;

import React from "react";
import { Input, Button, HStack } from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";

function SearchBox() {
  return (
    <>
      <HStack borderStyle="dotted" borderColor="gray.200">
        <Input
          variant="flushed"
          placeholder={"Ara"}
          maxLength={30}
          width={{
            sm: "300px",
            md: "300px",
            lg: "350px",
            xl: "350px",
            "2xl": "400px",
          }}
        />

        <Button bg={"transparent"} aria-label="Search product">
          <FiSearch />
        </Button>
      </HStack>
    </>
  );
}

export default SearchBox;

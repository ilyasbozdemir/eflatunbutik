import React from "react";
import { Text } from "@chakra-ui/react";

import { Stack } from "@chakra-ui/react";

import { Radio, RadioGroup } from "@chakra-ui/react";

const CategoryName = ({ name }) => {
  return (
    <>
      <Text fontWeight={"semibold"}>{name}</Text>
    </>
  );
};

const BodySize = () => {
  return (
    <>
      <CategoryName name={"Beden"} />
      <RadioGroup defaultValue="2">
        <Stack spacing={5} direction="row" w={"90%"}>
          <Radio colorScheme="pink" value="1">
            36
          </Radio>
          <Radio colorScheme="pink" value="2">
            38
          </Radio>
          <Radio colorScheme="pink" value="3">
            40
          </Radio>
          <Radio colorScheme="pink" value="4">
            42
          </Radio>
          <Radio colorScheme="pink" value="5">
            44
          </Radio>
          <Radio colorScheme="pink" value="6">
            46
          </Radio>
          <Radio colorScheme="pink" value="7">
            48
          </Radio>
        </Stack>
      </RadioGroup>
    </>
  );
};

export default BodySize
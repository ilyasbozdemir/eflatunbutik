import React from "react";
import { Text, Box } from "@chakra-ui/react";

import { Stack } from "@chakra-ui/react";

import { Radio, RadioGroup } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
const CategoryName = ({ name }) => {
  return (
    <>
      <Text fontWeight={"semibold"} fontFamily={"system-ui, sans-serif"}>
        {name}
      </Text>
    </>
  );
};

const BodySize = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /*const { name, value } = { name: "filtreler", value: "test-value" };

  //filtreler=bedenler:XS;renk:Siyah

  setSearchParams({
    [name]: value,
  });*/

  return (
    <Box w={"100%"} fontFamily={"corbel"}>
      <CategoryName name={"Beden"} />
      <RadioGroup defaultValue="1" colorScheme="pink">
        <Stack spacing={5} direction="column">
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
    </Box>
  );
};

export default BodySize;

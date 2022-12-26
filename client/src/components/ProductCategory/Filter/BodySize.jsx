import React from "react";
import { Text, Box } from "@chakra-ui/react";

import { Stack } from "@chakra-ui/react";
import { useRadio, useRadioGroup } from "@chakra-ui/react";
import { Label, Input, Image } from "@chakra-ui/react";
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

function BodySizeRadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "pink.600",
          color: "white",
          borderColor: "pink.600",
        }}
        px={1}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  );
}

const BodySize = () => {
  const [value, setValue] = React.useState("1");

  const options = [
    "36",
    "38",
    "40",
    "42",
    "44",
    "46",
  ];

  const handleChange = (value) => {
    console.log("value change ");
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    id: "Beden",
    name: "EvaluationScore",
    defaultValue: value,
    onChange: handleChange,
  });
  const group = getRootProps();

  return (
    <Box w={"100%"} fontFamily={"corbel"}>
      <CategoryName name={"Beden"} />

      <Stack id={"Beden"} spacing={5} direction="column" mt={1} {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <BodySizeRadioCard key={value} {...radio}>
              {value}
            </BodySizeRadioCard>
          );
        })}
      </Stack>
    </Box>
  );
};

export default BodySize;

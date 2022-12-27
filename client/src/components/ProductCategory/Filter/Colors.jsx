import React from "react";
import { Text, Flex, Box, SimpleGrid, Tooltip } from "@chakra-ui/react";

import { AiOutlineCheck } from "react-icons/ai";

import { chakra, Icon } from "@chakra-ui/react";

import { Stack } from "@chakra-ui/react";
import { useCheckbox, useCheckboxGroup } from "@chakra-ui/react";

const invertColor = (hex) => {
  var color = hex;
  color = color.substring(1);
  color = parseInt(color, 16);
  color = 0xffffff ^ color;
  color = color.toString(16);
  color = ("000000" + color).slice(-6);
  color = "#" + color;
  return color;
};

function GetColorCheckbox(props) {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    <Tooltip label={props.value}>
      <chakra.label {...htmlProps}>
        <input {...getInputProps()} hidden />
        <Flex
          display="flex"
          alignItems="center"
          textAlign={"center"}
          justifyContent={"center"}
          border="1px solid"
          borderColor="black"
          bg={props.value}
          w={6}
          h={6}
          rounded={"full"}
          {...getCheckboxProps()}
        >
          {state.isChecked && (
            <Icon
              color={invertColor(props.value)}
              as={AiOutlineCheck}
              w={4}
              h={4}
            />
          )}
        </Flex>

        <Text color="gray.700" {...getLabelProps()} userSelect={"none"}></Text>
      </chakra.label>
    </Tooltip>
  );
}
const Colors = ({ colors }) => {
  React.useEffect(() => {}, [colors]);

  const handleChange = (value) => {
    //alert(value);
  };
  const { value, getCheckboxProps } = useCheckboxGroup({
    name: "ColorFilter",
    onChange: handleChange,
  });

  return (
    <Box w={"100%"} fontFamily={"corbel"}>
      <Text
        fontWeight={"semibold"}
        fontFamily={"system-ui, sans-serif"}
        children={"Renk"}
      />
      <SimpleGrid px={2} columns={5} id={"Colors"} spacing="3px">
        {colors.map((color, index) => {
          return (
            <GetColorCheckbox
              {...getCheckboxProps({ value: color.value })}
              label={color.label}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};
export default Colors;

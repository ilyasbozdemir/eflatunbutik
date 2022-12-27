import React from "react";
import { Text, Flex, Box, SimpleGrid } from "@chakra-ui/react";

import { AiOutlineCheck } from "react-icons/ai";

import { chakra, Icon } from "@chakra-ui/react";

import { Stack } from "@chakra-ui/react";
import { useCheckbox, useCheckboxGroup } from "@chakra-ui/react";

const invertColor = (hex) => {
  var color = hex;
  color = color.substring(1); // remove #
  color = parseInt(color, 16); // convert to integer
  color = 0xffffff ^ color; // invert three bytes
  color = color.toString(16); // convert to hex
  color = ("000000" + color).slice(-6); // pad with leading zeros
  color = "#" + color; // prepend #
  return color;
};

function GetColorCheckbox(props) {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    <chakra.label cursor="pointer" {...htmlProps}>
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
        {console.log(invertColor(props.value) + " " + props.value)}
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
  );
}
const Colors = ({ colors }) => {
  React.useEffect(() => {}, [colors]);

  const handleChange = (value) => {
    //alert(value);
  };
  const { value, getCheckboxProps } = useCheckboxGroup({
    name: "ColorFilter",
    defaultValue: [colors[0]],
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
        {colors.map((color) => {
          return <GetColorCheckbox {...getCheckboxProps({ value: color })} />;
        })}
      </SimpleGrid>
    </Box>
  );
};
export default Colors;

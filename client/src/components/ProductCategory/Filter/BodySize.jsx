import React from "react";
import { chakra, Text, Box, Flex, Icon, SimpleGrid } from "@chakra-ui/react";

import { Tooltip } from "@chakra-ui/react";
import { useCheckbox, useCheckboxGroup } from "@chakra-ui/react";

import { AiOutlineCheck } from "react-icons/ai";
import { MainContext, useContext } from "../../../contexts/MainContext";
import { useSearchParams, useLocation } from "react-router-dom";

const CategoryName = ({ name }) => {
  return (
    <>
      <Text fontWeight={"semibold"} fontFamily={"system-ui, sans-serif"}>
        {name}
      </Text>
    </>
  );
};

function CustomCheckbox(props) {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    <Tooltip label={props.label}>
      <chakra.label
        display="flex"
        flexDirection="row"
        alignItems="center"
        cursor="pointer"
        {...htmlProps}
      >
        <input {...getInputProps()} hidden />
        <Flex
          alignItems="center"
          justifyContent="center"
          border="2px solid"
          borderColor="pink.600"
          w={4}
          h={4}
          {...getCheckboxProps()}
        >
          {state.isChecked && (
            <Icon color={"pink.500"} as={AiOutlineCheck} w={3} h={3} />
          )}
        </Flex>

        <Text color="gray.700" {...getLabelProps()} userSelect={"none"} pl={1}>
          {props.value}
        </Text>
      </chakra.label>
    </Tooltip>
  );
}
const BodySize = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const values = [
    "36",
    "38",
    "40",
    "42",
    "44",
    "46",
    "48",
    "STD",
    "S",
    "M",
    "L",
    "XL",
  ];

  const [bodies, setBodies] = React.useState([]);

  const { tags, setTags } = useContext(MainContext);

  const handleChange = (value) => {
    /* setBodies((oldValues) => {
      return oldValues.filter((tag) => tag !== value);
    });
    */



   // setSearchParams({ pb: bodies });
   // setTags([...tags, bodies]);
  };

  console.table(searchParams.get("pb"));

  const { value, getCheckboxProps } = useCheckboxGroup({
    name: "BodySize",
    onChange: handleChange,
  });

  return (
    <Box w={"100%"} fontFamily={"Verdana"} fontSize={14}>
      <CategoryName name={"Beden"} />

      <SimpleGrid id={"Beden"} columns={4} spacing="3px">
        {values.map((value) => {
          return <CustomCheckbox {...getCheckboxProps({ value: value })} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default BodySize;

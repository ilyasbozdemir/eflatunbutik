import React from "react";
import { Text, Flex, Tooltip } from "@chakra-ui/react";

import { Icon, Stack, Box } from "@chakra-ui/react";

import { AiFillStar } from "react-icons/ai";

import { Radio, RadioGroup } from "@chakra-ui/react";
import { useSearchParams, useLocation } from "react-router-dom";

import { MainContext, useContext } from "../../../contexts/MainContext";

import { useRadio, useRadioGroup } from "@chakra-ui/react";

function EvaluationScoreRadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Tooltip label={props.children} bg={"pink.600"}>
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
        userSelect={"none"}
      >
        {props.children}
      </Box>
    </Box>
    </Tooltip>
  );
}

function EvaluationScore() {
  const { tags, setTags } = useContext(MainContext);

  const options = [
    "4 yıldız ve üzeri",
    "3 yıldız ve üzeri",
    "2 yıldız ve üzeri",
    "1 yıldız ve üzeri",
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  
  const handleChange = (value) => {
    setTimeout(() => {
      setSearchParams({ pr: value });

      tags.forEach(function (t) {
        if (t.endsWith("yıldız ve üzeri")) {
          setTags((oldValues) => {
            return oldValues.filter((tag) => tag !== t);
          });
        }
      });
    }, 50);

    setTags([...tags, value]);
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    id: "Beden",
    name: "EvaluationScore",
    onChange: handleChange,
  });
  const group = getRootProps();

  return (
    <>
      <Box id="beden" w={"100%"} fontFamily={"corbel"}>
        <Text fontWeight={"semibold"} fontFamily={"system-ui, sans-serif"}>
          {"Değerlendirme Puanı"}
        </Text>
        <Stack spacing={5} direction="column" {...group} mt={1}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <EvaluationScoreRadioCard key={value} {...radio}>
                {value}
              </EvaluationScoreRadioCard>
            );
          })}
        </Stack>
      </Box>
    </>
  );
}

export default EvaluationScore;

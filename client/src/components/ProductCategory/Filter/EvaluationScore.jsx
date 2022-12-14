import React from "react";
import { Text, Flex } from "@chakra-ui/react";

import { Icon, Stack, Box } from "@chakra-ui/react";

import { AiFillStar } from "react-icons/ai";

import { Radio, RadioGroup } from "@chakra-ui/react";

function EvaluationScore() {
  return (
    <>
      <Box w={"90%"}>
        <Text fontWeight={"semibold"}>{"Değerlendirme Puanı"}</Text>
        <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="column">
            <Radio colorScheme="pink" value="1">
              <Flex justifyContent={"center"} textAlign={"center"}>
                <Icon as={AiFillStar} color={"yellow.400"} />
                <Text> 4 yıldız ve üzeri</Text>
              </Flex>
            </Radio>
            <Radio colorScheme="pink" value="2">
              <Flex>
                <Icon as={AiFillStar} color={"yellow.400"} />{" "}
                <Text>3 yıldız ve üzeri</Text>
              </Flex>
            </Radio>
            <Radio colorScheme="pink" value="3">
              <Flex>
                <Icon as={AiFillStar} color={"yellow.400"} />{" "}
                <Text>2 yıldız ve üzeri</Text>
              </Flex>
            </Radio>
            <Radio colorScheme="pink" value="4">
              <Flex>
                <Icon as={AiFillStar} color={"yellow.400"} />{" "}
                <Text>1 yıldız ve üzeri</Text>
              </Flex>
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </>
  );
}

export default EvaluationScore;

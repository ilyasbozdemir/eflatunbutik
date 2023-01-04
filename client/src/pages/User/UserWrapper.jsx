import { Box, Container, Stack, StackDivider, Text } from "@chakra-ui/react";
import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import { Divider } from "@chakra-ui/react";

function UserWrapper(props) {
  const { pageName } = props;
  if (pageName) {
    if (pageName) {
    }
  }

  return (
    <>
      <Stack bg={"gray.100"}>
        <Stack
          as="section"
          m={5}
          spacing={10}
          direction={{ base: "column", md: "row" }}
        >
          <Box as="nav" w={250} rounded={10} p={3}>
            <Text borderBottom={"2px pink solid"}>Hesabım</Text>
            <List>
              <ListItem py={3}>Lorem ipsum dolor sit amet</ListItem>
              <Divider />
              <ListItem py={3}>Consectetur adipiscing elit</ListItem>
            </List>
          </Box>
          <Box as="aside" rounded={10} p={3}>
            <Text as="div" borderBottom={"2px gray solid"}>
              Hesabım
            </Text>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
export default UserWrapper;

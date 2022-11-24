import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Center,
  useColorModeValue as UseColorModeValue,

} from "@chakra-ui/react";

import React, { useState  } from "react";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";
import { useFormik  } from "formik";

//import { register } from "../../firebase";

function index() {
 // const [email, setEmail] = UseState("");
//  const [password, setPassword] = UseState("");

  const handledSubmit = async (e) => {
    e.preventDefault()
   // const user = await register(email,password);

  };

  return (
    <>
      <Stack spacing="6">
        <Stack spacing="5">
          <form onSubmit={handledSubmit}>
            <FormControl>
              <FormLabel htmlFor="email">E-Posta</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField />
          </form>
        </Stack>
        <Stack spacing="6">
          <Button
            variant="primary"
            color={"white"}
            bg={UseColorModeValue("gray.100", "gray.700")}
            bgGradient={"linear(to-l, #7928CA, #FF0080)"}
            _hover={{
              bg: UseColorModeValue("gray.800", "gray.500"),
              bgGradient: "linear(to-r, #ac28ca, #ff1060)",
            }}
            type="submit"
          >
            Üye Ol
          </Button>
          <HStack>
            <Divider />
            <Text fontSize="sm" whiteSpace="nowrap" color="muted">
              veya devam et
            </Text>
            <Divider />
          </HStack>
          <OAuthButtonGroup />
        </Stack>
      </Stack>
    </>
  );
}

export default index;

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
  Box,
  Center,
  useColorModeValue as UseColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";
import { useFormik as UseFormik } from "formik";

const index = () => (
  <>
    <Stack spacing="6">
      <Stack spacing="5">
        <Center>Beta</Center>
        <FormControl>
          <FormLabel htmlFor="email">E-Posta</FormLabel>
          <Input id="email" type="email" />
        </FormControl>
        <PasswordField />
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

export default index;

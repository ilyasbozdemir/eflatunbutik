import React from "react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Stack,
  Button,
} from "@chakra-ui/react";

function MyUserInformation() {
  return (
    <Stack spacing={2} p={5} >
      <FormControl>
        <FormLabel>Ad :</FormLabel>
        <Input type="text" />
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Soyad :</FormLabel>
        <Input type="text" />
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Email Adresi</FormLabel>
        <Input type="email" />
        <FormHelperText></FormHelperText>
      </FormControl>
      <Button colorScheme={"green"}>Kaydet</Button>
    </Stack>
  );
}

export default MyUserInformation;

import React from "react";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack,
  Button,
  Checkbox,
} from "@chakra-ui/react";

function MyUserInformation() {
  return (
    <Stack spacing={2} p={5} userSelect={"none"}>
      <FormControl>
        <FormLabel for={"name"}>Ad :</FormLabel>
        <Input id={"name"} type="text" />
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel for={"surname"}>Soyad :</FormLabel>
        <Input id={"surname"} type="text" />
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel for={"email"}>Email Adresi :</FormLabel>
        <Input id={"email"} type="email" />
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel for={"tel"}>Telefon :</FormLabel>
        <Input id={"tel"} type="tel" />
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel for={"date"}>Doğum Tarihi :</FormLabel>
        <Input id={"date"} type="date" />
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Cinsiyet :</FormLabel>
        <Stack spacing={5} direction="row">
          <Checkbox colorScheme="green">Erkek</Checkbox>
          <Checkbox colorScheme="green">Kadın</Checkbox>
        </Stack>
      </FormControl>

      <Button colorScheme={"green"}>Kaydet</Button>
    </Stack>
  );
}

export default MyUserInformation;

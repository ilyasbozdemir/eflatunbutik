import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
} from "@chakra-ui/react";
import React from "react";

function PasswordUpdate() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box my='4'>
      <FormControl>
        <FormLabel for={"current-password"}>Email Adresi :</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Gizle" : "Göster"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel for={"email"}>Email Adresi :</FormLabel>
        <InputGroup size="md">
          <Input pr="4.5rem" type={show ? "text" : "password"} />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Gizle" : "Göster"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel for={"email"}>Email Adresi :</FormLabel>
        <InputGroup size="md">
          <Input pr="4.5rem" type={show ? "text" : "password"} />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Gizle" : "Göster"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
      <Button size="sm" colorScheme={"green"}>
        Güncelle
      </Button>
    </Box>
  );
}

export default PasswordUpdate;

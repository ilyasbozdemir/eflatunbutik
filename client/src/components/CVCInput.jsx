import React from "react";
import ReactInputMask from "react-input-mask";
import PaymentIcon from "react-payment-icons";
import {
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { VscWorkspaceTrusted } from "react-icons/vsc";

export function CVCInput() {
  return (
    <>
      <FormControl>
        <ReactInputMask mask="999" maskChar=" ">
          {() => (
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={VscWorkspaceTrusted} color="gray.500" />}
              />
              <Input placeholder="CVC" />
            </InputGroup>
          )}
        </ReactInputMask>
      </FormControl>
    </>
  );
}

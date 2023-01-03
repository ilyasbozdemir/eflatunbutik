import React, { Fragment } from "react";
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

function CVCInput() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default CVCInput;

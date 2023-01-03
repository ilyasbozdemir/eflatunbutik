import { FormControl, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { Fragment } from "react";
import ReactInputMask from "react-input-mask";
import PaymentIcon from "react-payment-icons";
import { CiCalendarDate } from "react-icons/ci";

function DateInput() {
  return (
    <Fragment>
      <FormControl>
        <ReactInputMask mask="99/99" maskChar=" ">
          {() => (
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={CiCalendarDate} color="gray.500" />}
              />
              <Input placeholder="Son Kullanma Tarihi" />
            </InputGroup>
          )}
        </ReactInputMask>
      </FormControl>
    </Fragment>
  );
}

export default DateInput;

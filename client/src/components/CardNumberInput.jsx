import { FormControl, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { Fragment } from "react";
import ReactInputMask from "react-input-mask";
import { AiOutlineCreditCard } from "react-icons/ai";
function CardNumberInput() {
  return (
    <Fragment>



      <FormControl>
        <ReactInputMask mask="9999 9999 9999 9999" maskChar=" ">
          {() => 
            <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={AiOutlineCreditCard} color="gray.500" />}
            />
           <Input placeholder="Kart Numarası" />
          </InputGroup>
          }

        </ReactInputMask>
      </FormControl>
    </Fragment>
  );
}

export default CardNumberInput;

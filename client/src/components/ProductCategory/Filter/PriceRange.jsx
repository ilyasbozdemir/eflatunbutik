import React from "react";

import { Text, Flex, Box, Input, Button } from "@chakra-ui/react";

import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  useEditableControls,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";

import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { CloseIcon, CheckIcon, EditIcon } from "@chakra-ui/icons";

function PriceRange() {
  const minPrice = 90;
  const maxPrice = 300;
  const step = 1;
  const [sliderValue, setSliderValue] = React.useState([minPrice, maxPrice]);

  const onChanged = ([min, max]) => {
    setSliderValue([min, max]);
  };

  let tutar = 125;
  tutar = tutar + (tutar * 44) / 100

 
  return (
    <>
      <Box w={"90%"}>
        <Text fontWeight={"semibold"}>Fiyat Aralığı</Text>
        <RangeSlider
          ariaLabel={["min", "max"]}
          defaultValue={sliderValue}
          min={minPrice}
          max={maxPrice}
          step={step}
          onChangeEnd={(val) => setSliderValue(val)}
        >
          <RangeSliderTrack bg="red.100">
            <RangeSliderFilledTrack bg="red.500" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={3} index={0} bg="pink.300" />
          <RangeSliderThumb boxSize={3} index={1} bg="pink.300" />
        </RangeSlider>

        <Flex justifyContent={"space-between"} w={"95%"}>
          <InputRangeSliderEditableControls
            value={sliderValue[0]}
            onChange={(e) => onChanged([e.target.value, sliderValue[1]])}
          />
          <InputRangeSliderEditableControls
            value={sliderValue[1]}
            onChange={(e) => onChanged([sliderValue[0], e.target.value])}
          />
        </Flex>
      </Box>
    </>
  );
}

const InputRangeSliderEditableControls = (props) => {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton
          icon={<CloseIcon boxSize={3} />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : null;
  }

  return (
    <Editable
      defaultValue={props?.defaultValue}
      value={props.value}
      isPreviewFocusable={true}
      selectAllOnFocus={false}
      variant={"ghost"}
    >
      <Tooltip label="Düzenle">
        <EditablePreview
          py={2}
          px={4}
          _hover={{
            background: useColorModeValue("gray.100", "gray.700"),
          }}
        />
      </Tooltip>
      <Input
        py={2}
        px={3}
        as={EditableInput}
        type={"number"}
        onChange={props.onChange}
      />
      <EditableControls />
    </Editable>
  );
};

export default PriceRange;

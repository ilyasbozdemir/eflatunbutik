import React from "react";

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  Box,
} from "@chakra-ui/react";

import {
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

import { useSearchParams, useLocation } from "react-router-dom";

function PriceRange() {
  const minPrice = 100;
  const maxPrice = 250;

  const [sliderValue, setSliderValue] = React.useState([minPrice, maxPrice]);

  const [value, setValue] = React.useState(minPrice);
  const [value2, setValue2] = React.useState(maxPrice);

  const onChanged = ([min, max]) => {
    setSliderValue([min, max]);
    setValue(min);
    setValue2(max);
  };

  const handleChange = (val) => {
    setValue(val);
    setSliderValue([val, sliderValue[1]]);
  };

  const handleChange2 = (val) => {
    setValue2(val);
    setSliderValue([sliderValue[0], val]);
  };
  const [searchParams, setSearchParams] = useSearchParams();
  
  React.useEffect(() => {
    setSearchParams({ fiyat: `${sliderValue[0]},${sliderValue[1]}` });
  }, [sliderValue]);

  return (
    <>
      <Box w={"90%"}>
        <Text fontWeight={"semibold"}>Fiyat Aralığı</Text>

        <RangeSlider
          value={sliderValue}
          min={0}
          max={300}
          step={10}
          onChangeEnd={onChanged}
          onChange={onChanged}
        >
          <RangeSliderTrack bg="red.100">
            <RangeSliderFilledTrack bg="tomato" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={4} index={0} bg="red" />
          <RangeSliderThumb boxSize={4} index={1} bg="red" />
        </RangeSlider>
        <Flex direction={"row"}>
          <NumberInput
            value={value}
            onChange={handleChange}
            allowMouseWheel
            size={"sm"}
          >
            <NumberInputField />
          </NumberInput>
          <NumberInput
            maxW="90px"
            value={value2}
            onChange={handleChange2}
            allowMouseWheel
            size={"sm"}
          >
            <NumberInputField />
          </NumberInput>
        </Flex>
      </Box>
    </>
  );
}

export default PriceRange;

import React from "react";

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  Box,
  Stack,
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
import { MainContext, useContext } from "../../../contexts/MainContext";

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
  const { tags, setTags } = useContext(MainContext);

  React.useEffect(() => {
    setTimeout(() => {
      setSearchParams({ fiyat: `${sliderValue[0]},${sliderValue[1]}` });

      tags.forEach(function (t, i) {
        if (t.endsWith("arası ürün")) {
          setTags((oldValues) => {
            return oldValues.filter((tag) => tag !== t);
          });
        }
      });
    }, 50);

    setTags([...tags, `${sliderValue[0]} - ${sliderValue[1]} arası ürün`]);

  }, [sliderValue]);

  return (
    <>
      <Box w={"90%"}>
        <Text fontWeight={"semibold"}>Fiyat Aralığı</Text>

        <RangeSlider
          min={minPrice}
          max={maxPrice}
          value={sliderValue}
          step={1}
          onChange={onChanged}
        >
          <RangeSliderTrack bg="red.100">
            <RangeSliderFilledTrack bg="tomato" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={4} index={0} bg="red" />
          <RangeSliderThumb boxSize={4} index={1} bg="red" />
        </RangeSlider>
        <Flex direction={"column"} gap={2}>
          <Stack direction={"row"}>
            <Text>Min:</Text>{" "}
            <NumberInput
              min={minPrice}
              max={maxPrice}
              value={value}
              onChange={handleChange}
              allowMouseWheel
              size={"sm"}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Stack>
          <Stack direction={"row"}>
            <Text>Max:</Text>{" "}
            <NumberInput
              min={minPrice}
              max={maxPrice}
              value={value2}
              onChange={handleChange2}
              allowMouseWheel
              size={"sm"}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}

export default PriceRange;

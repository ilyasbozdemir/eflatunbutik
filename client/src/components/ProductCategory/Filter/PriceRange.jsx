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
  Tooltip,
} from "@chakra-ui/react";

import { Flex } from "@chakra-ui/react";

import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

import { useSearchParams, useLocation } from "react-router-dom";
import { MainContext, useContext } from "../../../contexts/MainContext";

function PriceRange() {
  const { tags, setTags, products } = useContext(MainContext);

  const getPrices = (item) => {
    return item.price;
  };
  const prices = products.map(getPrices);

  const minPrice = Math.ceil(Math.min(...prices));
  const maxPrice = Math.ceil(Math.max(...prices));

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
          step={5}
          onChange={onChanged}
        >
          <RangeSliderTrack bg="red.100">
            <RangeSliderFilledTrack bg="tomato" />
          </RangeSliderTrack>

          <Tooltip label={sliderValue[0]} bg={"red.400"}>
            <RangeSliderThumb boxSize={4} index={0} bg="red" />
          </Tooltip>

          <Tooltip label={sliderValue[1]} bg={"red.400"}>
            <RangeSliderThumb boxSize={4} index={1} bg="red" />
          </Tooltip>
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

import React from "react";

import { Text, Flex, Box } from "@chakra-ui/react";

import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

function PriceRange() {
  const minPrice = 90;
  const maxPrice = 300;
  const step = 1;
  const [sliderValue, setSliderValue] = React.useState([minPrice, maxPrice]);

  return (
    <>
      <Box w={"90%"}>
        <Text fontWeight={"semibold"}>'Fiyat Aralığı'</Text>
        <RangeSlider
          defaultValue={sliderValue}
          min={minPrice}
          max={maxPrice}
          step={step}
          onChangeEnd={(val) => setSliderValue(val)}
        >
          <RangeSliderTrack bg="red.100">
            <RangeSliderFilledTrack bg="red.500" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} bg="pink.300" />
          <RangeSliderThumb boxSize={6} index={1} bg="pink.300" />
        </RangeSlider>

        <Flex justifyContent={"space-between"} w={"95%"}>
          <Text fontSize={"sm"}>{sliderValue[0]}</Text>
          <Text fontSize={"sm"}>{sliderValue[1]}</Text>
        </Flex>
      </Box>
    </>
  );
}

export default PriceRange;

import React from "react";
import { Image, Box } from "@chakra-ui/react";
function SliderItem({ src, alt }) {
  return (
    <>
      <Box>
        <Image src={src} alt={alt}/>
      </Box>
    </>
  );
}

export default SliderItem;

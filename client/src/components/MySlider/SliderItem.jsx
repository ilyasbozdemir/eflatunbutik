import React from "react";
import { Image, Box,Skeleton } from "@chakra-ui/react";
function SliderItem({ src, alt }) {
  return (
    <>
      <Box>
        <Image fallback={<Skeleton/>} src={src} alt={alt}/>
      </Box>
    </>
  );
}

export default SliderItem;

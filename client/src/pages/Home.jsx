import React from "react";

import MySlider from "../components/MySlider";
import IGStory from "../components/IGStory";
import Highlights from "../components/Highlights";
import Showcase from "../components/Showcase";
import { Stack, HStack } from "@chakra-ui/react";

import Product from "../components/Product";

function Home() {
  return (
    <Stack>
      {/*  <HStack>
      <MySlider />
       </HStack>
      */}
      <HStack>
        <IGStory />
      </HStack>
      <HStack>
        <Highlights />
      </HStack>

      <HStack>
        <Showcase />
      </HStack>


      <Product />
    </Stack>
  );
}

export default Home;

import React from "react";

import MySlider from "../components/MySlider";
import IGStory from "../components/IGStory";
import Highlights from "../components/Highlights";
import Showcase from "../components/Showcase";
import { Stack, HStack } from "@chakra-ui/react";

function Home() {
  return (
    <Stack>
      <HStack>
        <MySlider />
      </HStack>
      <HStack>
        <IGStory />
      </HStack>
      <HStack>
        <Highlights />
      </HStack>
      <HStack>
        <Showcase />
      </HStack>
    </Stack>
  );
}

export default Home;

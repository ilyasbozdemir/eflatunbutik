import { Stack, HStack } from "@chakra-ui/react";
import React from "react";

const Showcase = React.lazy(() => import("../components/Showcase"));
const Highlights = React.lazy(() => import("../components/Highlights"));
const IGStory = React.lazy(() => import("../components/IGStory"));
const MySlider = React.lazy(() => import("../components/MySlider"));

function Home() {
  return (
    <>
      {/*
      <HStack>
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
    </>
  );
}

export default Home;

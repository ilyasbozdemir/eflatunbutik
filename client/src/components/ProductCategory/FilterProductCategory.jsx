import { useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { Flex } from "@chakra-ui/react";
const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

function FilterProductCategory() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Flex direction={"column"} zIndex={150}>
        <Sidebar
          variant={variants?.navigation}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
        <Box ml={!variants?.navigationButton && 200}>
          <Header
            showSidebarButton={variants?.navigationButton}
            onShowSidebar={toggleSidebar}
          />
        </Box>
      </Flex>
    </>
  );
}

export default FilterProductCategory;

import { useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";

import ProductContent from "./ProductContent";
import Sidebar from "./Sidebar";
import { Flex } from "@chakra-ui/react";
const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

function FilterProductCategory(props) {
  const { children } = props;
  
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Flex direction={"row"} zIndex={150}>
        <Sidebar
          variant={variants?.navigation}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
        <Box>
          <ProductContent
            showSidebarButton={variants?.navigationButton}
            onShowSidebar={toggleSidebar}
          >
            {children}
          </ProductContent>
        </Box>
      </Flex>
    </>
  );
}

export default FilterProductCategory;

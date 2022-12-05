import { useState } from "react";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";

import ProductContent from "./ProductContent";
import Sidebar from "./Sidebar";
const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

function FilterProductCategory(props) {
  const { children } = props;

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Flex direction={"row"} mt={2} ml={2}>
        <Sidebar
          variant={variants?.navigation}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
        <Box ml={2}>
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

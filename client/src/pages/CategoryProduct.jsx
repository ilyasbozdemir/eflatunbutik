import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import FilterProductCategory from "../components/ProductCategory/FilterProductCategory";

function CategoryProduct(props) {
  const { breadcrumbs, categoryData, isSearchPage } = props;

  return (
    <Box mt={2} ml={2} zIndex={150}>
      <Flex direction={"column"} mt={2} ml={2}>
        breadcrumbs
      </Flex>
      <FilterProductCategory>{"{Product Filter Body}"}</FilterProductCategory>
    </Box>
  );
}

export default CategoryProduct;

import { Box } from "@chakra-ui/react";
import * as React from "react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";

function index({ categoryData }) {
  return (
    <Box my={5}>
      <ProductGrid>
        {categoryData?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Box>
  );
}

export default index;

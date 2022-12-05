import { Box } from "@chakra-ui/react";
import * as React from "react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";

function index({ categoryData }) {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{
        base: "42",
        md: "4",
        lg: "6",
      }}
      py={{
        base: "3",
        md: "4",
        lg: "6",
      }}
    >
      <ProductGrid>
        {categoryData?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Box>
  );
}

export default index;

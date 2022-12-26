import { SimpleGrid, Box } from "@chakra-ui/react";
import * as React from "react";

export const ProductGrid = (props) => {
  const child = React.Children.toArray(props.children);

  return (
    <SimpleGrid 
    ml={1} 
    columns={[2, 3, 4]}
     gap={[1, 2, 3, 4]}
      >
      {child.map((c, i) => (
        <div key={i}>{c}</div>
      ))}
    </SimpleGrid>
  );
};

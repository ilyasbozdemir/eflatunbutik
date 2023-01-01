import { SimpleGrid, Box } from "@chakra-ui/react";
import * as React from "react";

import { motion } from "framer-motion";
import { parentVariant } from "../../motion";
const MotionSimpleGrid = motion(SimpleGrid);
export const ProductGrid = (props) => {
  const child = React.Children.toArray(props.children);

  return (
    <MotionSimpleGrid
      animate="animate"
      variants={parentVariant}
      ml={1}
      columns={[2, 2, 4]}
      gap={[1, 2, 3, 4]}
    >
      {child.map((c, i) => (
        <div key={i}>{c}</div>
      ))}
    </MotionSimpleGrid>
  );
};

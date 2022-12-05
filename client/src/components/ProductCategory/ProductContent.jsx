import { Box, IconButton, Flex, ButtonGroup } from "@chakra-ui/react";

import { TbFilter, TbArrowsSort } from "react-icons/tb";
const ProductContent = (props) => {
  const { showSidebarButton = true, onShowSidebar } = props;
  return (
    <>
      <>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <ButtonGroup size="sm" isAttached variant="outline">
              <IconButton aria-label="Add to friends" icon={<TbArrowsSort />} />
              <IconButton aria-label="Add to friends" icon={<TbFilter />} />
            </ButtonGroup>
          </Box>
        </Flex>
      </>
    </>
  );
};
export default ProductContent;

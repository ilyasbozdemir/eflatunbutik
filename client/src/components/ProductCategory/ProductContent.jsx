import { Box, IconButton, Flex, ButtonGroup } from "@chakra-ui/react";

import { TbFilter } from "react-icons/tb";
const ProductContent = (props) => {
  const { showSidebarButton = true, onShowSidebar } = props;
  return (
    <>
      {showSidebarButton && (
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="2"
          borderRadius={"10px 10px"}
        >
          <ButtonGroup size="md" isAttached variant="outline">
            <IconButton
              aria-label="Add to friends"
              icon={<TbFilter />}
              onClick={onShowSidebar}
            />
          </ButtonGroup>
        </Flex>
      )}
    </>
  );
};
export default ProductContent;

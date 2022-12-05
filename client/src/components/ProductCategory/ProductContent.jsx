import { Box, IconButton, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const ProductContent = (props) => {
  const { showSidebarButton = true, onShowSidebar } = props;
  return (
    <>
      <>
        <Flex mb={5} borderRadius={"10px 10px"}>
          <Box>
            {showSidebarButton && (
              <IconButton
                icon={<ChevronRightIcon w={8} h={8} />}
                colorScheme="blackAlpha"
                variant="outline"
                onClick={onShowSidebar}
              />
            )}
          </Box>
        </Flex>
      </>
    </>
  );
};
export default ProductContent;

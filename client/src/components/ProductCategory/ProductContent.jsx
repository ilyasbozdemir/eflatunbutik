import { Icon, Button, Flex, ButtonGroup } from "@chakra-ui/react";

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
          <ButtonGroup size="md"  variant="outline">
            <Button aria-label="product filters" onClick={onShowSidebar}>
              <Icon as={TbFilter} />
              Filtrele
            </Button>
          </ButtonGroup>
        </Flex>
      )}
    </>
  );
};
export default ProductContent;

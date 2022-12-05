import React from "react";
import {
  Flex,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Text,
  Icon,
} from "@chakra-ui/react";

import FilterProductCategory from "../components/ProductCategory/FilterProductCategory";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import Product from "../components/Product";

function CategoryProduct(props) {
  const { breadcrumbs, isSearchPage } = props;
  const [categoryData, setCategoryDaya] = React.useState([]);

  return (
    <Box mt={10} ml={2} zIndex={150}>
      {isSearchPage ?? isSearchPage === false ? (
      ''
      ) : (
        <>
          <Breadcrumb
            separator={<Icon as={IoMdArrowDropright} color="gray.500" />}
          >
            {breadcrumbs.map((breadcrumb, i) => (
              <BreadcrumbItem isCurrentPage={breadcrumb.isCurrentPage}>
                {breadcrumb.isCurrentPage === true ? (
                  <Text>{breadcrumb.item}</Text>
                ) : (
                  <Link to={breadcrumb.link}>{breadcrumb.item}</Link>
                )}
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </>
      )}

      <FilterProductCategory isSearchPage={isSearchPage}>
      <Product categoryData={categoryData} />
      </FilterProductCategory>
    </Box>
  );
}

export default CategoryProduct;

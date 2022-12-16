import React from "react";
import {
  Center,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Text,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";

import FilterProductCategory from "../components/ProductCategory/FilterProductCategory";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import Product from "../components/Product";

import { products } from "../components/Product/_data";

function CategoryProduct(props) {
  const { breadcrumbs, isSearchPage } = props;
  const [categoryData, setCategoryDaya] = React.useState(products);

  React.useEffect(() => {
    setCategoryDaya(products);
  }, [categoryData]);

  const smVariant = { isCenter: false };
  const mdVariant = { isCenter: true };

  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  return (
    <Box as={variants?.isCenter === true ? Box : Center}>
      <Box mt={5} zIndex={150} mx={2}>
        {isSearchPage ?? isSearchPage === false ? (
          ""
        ) : (
          <>
            <Breadcrumb
              separator={<Icon as={IoMdArrowDropright} color="gray.500" />}
              my={2}
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
    </Box>
  );
}

export default CategoryProduct;

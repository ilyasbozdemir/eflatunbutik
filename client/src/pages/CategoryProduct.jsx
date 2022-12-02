import React from "react";

import Categories from "../components/Categories";
import { Text, Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";

function CategoryProduct(breadcrumbs) {
  const breadcrumb = () => (
    <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
      {breadcrumbs.map((breadcrumb, i) => (
        <BreadcrumbItem isCurrentPage={breadcrumb.isCurrentPage}>
          {breadcrumb.isCurrentPage ? (
            <Text>{breadcrumb.item}</Text>
          ) : (
            <Link to={breadcrumb.link}>{breadcrumb.item}</Link>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
  //return <Categories breadcrumb={breadcrumb} categoryData={[{}]}></Categories>;
  return <Categories  categoryData={[{}]}></Categories>;
}

export default CategoryProduct;

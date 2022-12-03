import React from "react";

import { Text, Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";

import { Flex, Grid, Spacer } from "@chakra-ui/react";

import Product from "../components/Product";

//Kategoriler Beden Renk Fiyat Aralığı

function CategoryProduct(props) {
  const { breadcrumbs, categoryData } = props;

  const breadcrumb = () => (
    <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
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
  );

  return (
    <>
      <Flex direction={"row"}>
        <Grid as="aside" width={"270px"} bg={"pink.600"}>
          kategori filreleme alanı
        </Grid>
        <Grid width={"calc(100% - 270px)"}>
          {breadcrumb}
          <Product  categoryData={categoryData} />
        </Grid>
        <Spacer />
      </Flex>
    </>
  );
}

export default CategoryProduct;

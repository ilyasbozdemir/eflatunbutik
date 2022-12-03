import React from "react";

import { Text, Breadcrumb, BreadcrumbItem, Icon } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { Flex, Grid, Spacer } from "@chakra-ui/react";

import Product from "../components/Product";
import { IoMdArrowDropright } from "react-icons/io";
//Kategoriler Beden Renk Fiyat Aralığı

function CategoryProduct(props) {
  const { breadcrumbs, categoryData } = props;

  return (
    <>
      <Flex direction={"row"}>
        <Grid as="aside" width={"270px"} bg={"pink.600"}>
          kategori filreleme alanı
        </Grid>
        <Grid width={"calc(100% - 270px)"}>
          <Flex textAlign={"center"} mt={2} ml={2}>
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
          </Flex>

          <Product categoryData={categoryData} />
        </Grid>
        <Spacer />
      </Flex>
    </>
  );
}

export default CategoryProduct;

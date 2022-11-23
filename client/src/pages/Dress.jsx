import React from "react";

import Categories from "../components/Categories";
import { Text, Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";

function Dress() {

    const breadcrumb = (
      <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
        <BreadcrumbItem>
          <Link to="/">Anasayfa</Link>
        </BreadcrumbItem>
  
        <BreadcrumbItem isCurrentPage>
          <Text>Yeni Gelenler</Text>
        </BreadcrumbItem>
      </Breadcrumb>
    );
    return (
      <>
        <Categories breadcrumb={breadcrumb} categoryData={[{}]}></Categories>
      </>
    );

}

export default Dress
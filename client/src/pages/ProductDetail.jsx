import { Box } from "@chakra-ui/react";
import React from "react";
import Carousel from "../components/Carousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import ReactImageMagnify from "react-image-magnify";

function ProductDetail() {
  return (
    <>
      <Box p={3}>
        <>
          <Breadcrumb fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Current</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </>
        <>
          <>
            <Carousel />
          </>
          <></>
        </>
      </Box>
    </>
  );
}

export default ProductDetail;

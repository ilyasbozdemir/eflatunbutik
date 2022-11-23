import React, { Component } from "react";

import { Flex, Grid, Spacer, Stack, Text } from "@chakra-ui/react";

import Product from "../Product";

//Kategoriler Beden Renk Fiyat Aralığı
export class index extends Component {
  render() {
    const { breadcrumb, categoryData } = this.props;

    return (
      <>
        <Flex direction={"row"}>
          <Grid as="aside" width={"270px"} bg={'pink.600'}>
            kategori filreleme alanı
          </Grid>
          <Grid width={"calc(100% - 270px)"}>
            {breadcrumb}
            <Product categoryData={categoryData} />
          </Grid>
          <Spacer />
        </Flex>
      </>
    );
  }
}

export default index;

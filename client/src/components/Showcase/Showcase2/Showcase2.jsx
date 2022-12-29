import { Image, Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import style from "./style.module.css";

import { MainContext, useContext } from "../../../contexts/MainContext";

const Cart = (props) => {
  const { name, to, src } = props;

  return (
    <Link to={to}>
      <Box className={style.cart} transition="transform 0.75s">
        <Image src={src} alt={`${name} photos`} className={style.cart_image} />
        <Box as="h3" className={style.cart_title}>
          {name}
        </Box>
      </Box>
    </Link>
  );
};

function Showcase2() {
  const { carts } = useContext(MainContext);

  return (
    <>
      <SimpleGrid
        ml={1}
        columns={[2, 3, 4, 5, 6]}
        gap={[1, 2, 3, 4, 5]}
        h={"100%"}
      >
        {carts.map((cart, i) => (
          <Cart key={i} {...cart} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default Showcase2;

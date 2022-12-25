import { Image, Box, SimpleGrid } from "@chakra-ui/react";
import React, { useMemo as UseMemo } from "react";
import { Link } from "react-router-dom";

import style from "./style.module.css";

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

const carts = [
  {
    name: "Yeni Gelenler",
    to: "/yeni-gelenler/",
    src: "https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
  },
  {
    name: "Elbise",
    to: "/elbise/",
    src: "https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
  },
  {
    name: "Triko",
    to: "/triko/",
    src: "https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
  },
  {
    name: "Üst Giyim",
    to: "/ust-giyim/",
    src: "https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
  },
  {
    name: "Alt Giyim",
    to: "/alt-giyim/",
    src: "https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
  },
  {
    name: "Dış Giyim",
    to: "/dis-giyim/",
    src: "https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
  },
  {
    name: "Outlet",
    to: "/outlet/",
    src: "https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
  },
];

function index() {
  const count = carts.length;
  const columns = UseMemo(() => {
    return {
      base: Math.min(2, count),
      md: Math.min(3, count),
      lg: Math.min(4, count),
      xl: Math.min(5, count),
    };
  }, [count]);

  return (
    <SimpleGrid
      ml={10}
      mr={10}
      columns={columns}
      columnGap={{
        base: "2",
        md: "2",
      }}
      rowGap={{
        base: "2",
        md: "2",
      }}
      justifyContent={"center"}
    >
      {carts.map((cart, index) => (
        <Cart key={index} {...cart} />
      ))}
    </SimpleGrid>
  );
}

export default index;

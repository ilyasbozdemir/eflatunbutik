import { Image, Box, SimpleGrid } from "@chakra-ui/react";
import React, { useMemo as UseMemo } from "react";

import style from "./style.module.css";

//https://images.unsplash.com/photo-1630759072462-d5348e577ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80
//https://images.unsplash.com/photo-1548306530-3ece53b754b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80
//https://images.unsplash.com/photo-1613521973937-efce73f2f943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80
//https://images.pexels.com/photos/7675547/pexels-photo-7675547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

const Cart = (props) => {
  const { imageUrl, title } = props;

  return (
    <>
      <Box className={style.cart} transition="transform 0.75s">
        <Image
          src={imageUrl}
          alt={`${title} photos`}
          className={style.cart_image}
        />
        <Box as="h3" className={style.cart_title}>
          {title}
        </Box>
      </Box>
    </>
  );
};

const carts = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1630759072462-d5348e577ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80",
    title: "Elbise",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1630759072462-d5348e577ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80",
    title: "Elbise",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1630759072462-d5348e577ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80",
    title: "Elbise",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1630759072462-d5348e577ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80",
    title: "Elbise",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1630759072462-d5348e577ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80",
    title: "Elbise",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1630759072462-d5348e577ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80",
    title: "Elbise",
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

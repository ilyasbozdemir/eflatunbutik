import React from "react";
import Slider from "react-slick";
import { Container } from "@chakra-ui/react";
import SliderItem from "./SliderItem";

import { useMediaQuery as UseMediaQuery } from "@chakra-ui/react";

function index() {
  const isDesktop = UseMediaQuery("(min-width: 768px)");

  let data = [
    {
      id: 1,
      url: "https://picsum.photos/1170/400?random=25",
      alt: "random 1",
    },
    {
      id: 2,
      url: "https://picsum.photos/1170/400?random=70",
      alt: "random 1",
    },
    {
      id: 3,
      url: "https://picsum.photos/1170/400?random=35",
      alt: "random 1",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnDotsHover: true,
    rtl: true,
  };


  return (
    <Container maxW="container.xl">
      <Slider {...settings}>
        {data.map((item) => (
          <SliderItem key={item.id} src={item.url} alt={item.alt} />
        ))}
      </Slider>
    </Container>
  );
}

export default index;

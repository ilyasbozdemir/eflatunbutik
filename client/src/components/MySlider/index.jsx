import React from "react";
import Slider from "react-slick";
import { Container } from "@chakra-ui/react";
import SliderItem from "./SliderItem";

import { useMediaQuery as UseMediaQuery } from "@chakra-ui/react";

import UseWindowDimensions from "../../../src/hooks/useWindowDimensions";

const SliderData = () => {
  const windowDimensions = UseWindowDimensions();

  let dataD = [
    {
      id: 1,
      url: "https://picsum.photos/1024/450?random=25",
      alt: "random 1",
    },
    {
      id: 2,
      url: "https://picsum.photos/1024/450?random=70",
      alt: "random 1",
    },
    {
      id: 3,
      url: "https://picsum.photos/1024/450?random=35",
      alt: "random 1",
    },
  ];
  let dataT = [
    {
      id: 1,
      url: "https://picsum.photos/750/400?random=25",
      alt: "random 1",
    },
    {
      id: 2,
      url: "https://picsum.photos/750/400?random=70",
      alt: "random 1",
    },
    {
      id: 3,
      url: "https://picsum.photos/750/400?random=35",
      alt: "random 1",
    },
  ];

  let dataM = [
    {
      id: 1,
      url: "https://picsum.photos/300/400?random=25",
      alt: "random 1",
    },
    {
      id: 2,
      url: "https://picsum.photos/300/400?random=70",
      alt: "random 1",
    },
    {
      id: 3,
      url: "https://picsum.photos/300/400?random=35",
      alt: "random 1",
    },
  ];

  const [data, setData] = React.useState(dataM);
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);

    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnDotsHover: true,
  };

  return (
    <Slider {...settings}>
      {data.map((item) => (
        <SliderItem key={item.id} src={item.url} alt={item.alt} />
      ))}
    </Slider>
  );
};

function index() {
  return (
    <Container maxW="container.xl" mb={4} w={"98%"}>
      <SliderData />
    </Container>
  );
}

export default index;

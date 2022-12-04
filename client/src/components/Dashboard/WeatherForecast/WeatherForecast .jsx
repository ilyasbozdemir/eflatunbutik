import { Flex, Box, Text, Icon, HStack } from "@chakra-ui/react";
import React from "react";
import { findIcon } from "./icons";
import axios from "axios";
function WeatherForecast() {
  //https://api.openweathermap.org/data/2.5/forecast?lat=37&lon=33&appid=208ea3c8385ff11580c26fbdda5e4006&lang=tr

  const [data, setData] = React.useState([]);
  const [cityName, setCityName] = React.useState({});
  const APP_ID = "208ea3c8385ff11580c26fbdda5e4006";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/";

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let url = `${BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${APP_ID}&lang=tr`;
      axios(url).then((data) => setData(data));
      var config = {
        method: "get",
        url: `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=fe941a86b64749c0927c60750eb1548a`,
        headers: {},
      };
      console.log(config.url);
      axios(config)
        .then(function (response) {
          setCityName(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  }, []);

  console.log("cityName : " + cityName);

  return (
    <>
      <Flex></Flex>
    </>
  );
}

export default WeatherForecast;

import { WiDaySunny, WiDayCloudy } from "react-icons/wi";

const icons = {
  daytime: [
    {
      name: "day-sunday",
      icon: WiDaySunny,
    },
    {
      name: "day-cloudy",
      icon: WiDayCloudy,
    },
    {
      name: "day-cloudy-gusts",
      icon: WiDaySunny,
    },
    {
      name: "day-cloudy-windy",
      icon: null,
    },
    {
      name: "day-fog",
      icon: null,
    },
    {
      name: "day-hail",
      icon: null,
    },
    {
      name: "day-haze",
      icon: null,
    },
    {
      name: "day-lightning",
      icon: null,
    },
    {
      name: "day-rain",
      icon: null,
    },
    {
      name: "day-rain-mix",
      icon: null,
    },
    {
      name: "day-rain-wind",
      icon: null,
    },
    {
      name: "day-showers",
      icon: null,
    },
    {
      name: "day-sleet",
      icon: null,
    },
  ],
  nighttime: [],
};

export const findIcon = (name) => {

    return icons.daytime.find((icon) => icon.name = name).icon;
};

export default icons;

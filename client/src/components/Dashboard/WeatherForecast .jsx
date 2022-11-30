import React from "react";
import useGeolocation from "react-navigator-geolocation";
import axios from "axios";



function WeatherForecast() {
  const [data, setData] = React.useState([]);



  React.useEffect(() => {
    const fetchData = async () => {
      let lat = 0,
        lon = 0,
        cnt = 7,
        API_KEY = "8aff4aa016d99bb07caf7a6bc85ee0af";

      navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
      });

      let url = "";

      const { response } = await axios.get(url);
      setData(response);
    };
  }, []);

  return (
    <>
      {data.map((repo) => (
        <div>{repo}</div>
      ))}
    </>
  );
}

export default WeatherForecast;

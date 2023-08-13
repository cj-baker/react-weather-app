import React from "react";
import { IconContext } from "react-icons";
import {
  FaSun,
  FaMoon,
  FaCloudSun,
  FaCloudMoon,
  FaCloud,
  FaCloudShowersHeavy,
  FaCloudBolt,
  FaCloudSunRain,
  FaCloudMoonRain,
  FaSnowflake,
  FaSmog,
} from "react-icons/fa6";
import "./Weather.css";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "01d": <FaSun />,
    "01n": <FaMoon />,
    "02d": <FaCloudSun />,
    "02n": <FaCloudMoon />,
    "03d": <FaCloud />,
    "03n": <FaCloud />,
    "04d": <FaCloud />,
    "04n": <FaCloud />,
    "09d": <FaCloudShowersHeavy />,
    "09n": <FaCloudShowersHeavy />,
    "10d": <FaCloudSunRain />,
    "10n": <FaCloudMoonRain />,
    "11d": <FaCloudBolt />,
    "11n": <FaCloudBolt />,
    "13d": <FaSnowflake />,
    "13n": <FaSnowflake />,
    "50d": <FaSmog />,
    "50n": <FaSmog />,
  };

  return (
    <IconContext.Provider
      value={{
        color: "white",
        className: "react-icons",
      }}
    >
      <div>{codeMapping[props.code]} </div>
    </IconContext.Provider>
  );
}

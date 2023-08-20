import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{day()}</div>

      <div className="forecast-icons">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="forecast-temperatures">
        <span className="temperature-high">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="temperature-low">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}

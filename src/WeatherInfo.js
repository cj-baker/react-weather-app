import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <h1>
      <div className="row g-3 current-weather">
        <div className="fluid col-4">
          <div className="current-day">
            <FormattedDate date={props.data.date} />
          </div>
          <div id="current-location">{props.data.city}</div>
          <div
            className="weather-details  text-capitalize"
            id="weather-condition"
          >
            {props.data.description}
          </div>
          <div className="weather-details" id="wind-speed">
            Wind: {Math.round(props.data.wind)} mph
          </div>
        </div>
        <div className="fluid col-3">
          <div>
            <WeatherIcon code={props.data.icon} src={props.data.description} />
          </div>
        </div>
        <div className="fluid col-4">
          <WeatherTemperature
            fahrenheit={props.data.temperature}
            high={props.data.maxTemp}
            low={props.data.minTemp}
          />
        </div>
      </div>
    </h1>
  );
}

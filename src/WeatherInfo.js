import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <h1>
      <div className="row g-3 current-weather">
        <div className="col-4">
          <span className="current-range" id="current-high">
            H: {Math.round(props.data.maxTemp)}°
          </span>
          <span className="current-range" id="current-low">
            L: {Math.round(props.data.minTemp)}°
          </span>
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
        <div className="col-4">
          <div>
            <img
              id="main-icon"
              src={props.data.icon}
              alt="Party Sunny with Clouds and Rain"
            ></img>
          </div>
        </div>
        <div className="col-4">
          <div className="current-temp" id="current-temp">
            {Math.round(props.data.temperature)}ºF
          </div>

          <div className="current-day">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
      </div>
    </h1>
  );
}

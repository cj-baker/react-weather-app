import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";
import "./Weather.css";

export default function WeatherTemperature(props) {
  return (
    <div className="justify-content-end">
      <h1 className="current-temp">
        {Math.round(props.temp)}
        <span className="fahrenheit">°F</span>
      </h1>
      <div className="weather-details" id="current-range">
        H: {Math.round(props.high)}° | L: {Math.round(props.low)}°
      </div>
    </div>
  );
}

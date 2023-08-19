import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function displayCelsius(event) {
    setUnit("celsius");
  }
  function displayFahrenheit(event) {
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <div className="justify-content-end">
        <div>
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">°F</Button>
            <Button variant="secondary" onClick={displayCelsius}>
              °C
            </Button>
          </ButtonGroup>
        </div>

        <h1 className="current-temp">{Math.round(props.fahrenheit)}°F</h1>
        <div className="weather-details" id="current-range">
          H: {Math.round(props.high)}° | L: {Math.round(props.low)}°
        </div>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    let celsiusHigh = ((props.high - 32) * 5) / 9;
    let celsiusLow = ((props.low - 32) * 5) / 9;
    return (
      <div>
        <div>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={displayFahrenheit}>
              °F
            </Button>
            <Button variant="primary">°C</Button>
          </ButtonGroup>
        </div>

        <div className="current-temp" id="current-temp">
          {Math.round(celsius)}°C
        </div>
        <div className="current-range">
          H: {Math.round(celsiusHigh)}° | L: {Math.round(celsiusLow)}°
        </div>
      </div>
    );
  }
}

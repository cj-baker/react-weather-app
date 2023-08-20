import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(reponse) {
    setForecast(reponse.data.daily);
    setReady(true);
  }
  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  if (ready) {
    return (
      <div className="WeatherForecast">
        <Row>
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <Col xs="4" sm key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </Col>
              );
            } else {
              return null;
            }
          })}
        </Row>
      </div>
    );
  } else {
    const apiKey = "1098686bcbb41f221c2aec962bdfe6fb";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "loading....";
  }
}

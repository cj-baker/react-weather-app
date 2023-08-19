import React from "react";
import { Row, Col } from "react-bootstrap";
import moment from "moment";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(reponse) {}
  const apiKey = "1098686bcbb41f221c2aec962bdfe6fb";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <Row>
        <Col>
          <div className="forecast-days">
            {moment().add(1, "day").format("dddd")}
          </div>
          <div className="forecast-icons">
            <WeatherIcon code="01d" />
          </div>
          <div className="forecast-temperatures">
            <span className="temperature-high">50°</span>
            <span className="temperature-low">20°</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

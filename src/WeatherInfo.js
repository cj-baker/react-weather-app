import React from "react";
import { Row, Col } from "react-bootstrap";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <Row className="current-weather">
      <Col xs={{ span: 5, order: 1 }} sm={{ span: 4, order: 0 }}>
        <h1 className="current-location">{props.data.city}</h1>
        <FormattedDate date={props.data.date} />
        <div
          className="weather-details  text-capitalize"
          id="weather-condition"
        >
          {props.data.description}
        </div>
        <div className="weather-details" id="wind-speed">
          Wind: {Math.round(props.data.wind)} mph
        </div>
      </Col>
      <Col xs={{ span: 12, order: 0 }} sm={{ span: 2, order: 1 }}>
        <div>
          <WeatherIcon code={props.data.icon} src={props.data.description} />
        </div>
      </Col>
      <Col xs={{ span: 5, order: 2 }} sm={{ span: 4, order: 2 }}>
        <WeatherTemperature
          fahrenheit={props.data.temperature}
          high={props.data.maxTemp}
          low={props.data.minTemp}
        />
      </Col>
    </Row>
  );
}

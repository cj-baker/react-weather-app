import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import { Button } from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    const apiKey = `1098686bcbb41f221c2aec962bdfe6fb`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return <div>"Loading...."</div>;
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form id="city-form" className="col-12" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              id="city-input"
              type="text"
              className="form-control search-bar"
              placeholder="Search for a city"
              aria-label="Search for a city"
              aria-describedby="basic-addon2"
              autoComplete="off"
              autoFocus="on"
              onChange={changeCity}
            />
            <div className="input-group-append">
              <Button className="btn search-button" type="submit">
                <FaMagnifyingGlass />
              </Button>
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
        <div className="weekly-weather" id="forecast"></div>
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}

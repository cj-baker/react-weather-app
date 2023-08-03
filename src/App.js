import "./App.css";
import { Button, ModalBody } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <body className="App">
      <div className="container">
        <div className="content">
          <div className="row g-1 settings">
            <form id="city-form" className="col-9">
              <div className="p-3">
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
                  />
                  <div className="input-group-append">
                    <Button className="btn search-button" type="submit">
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </form>
            <div className="col-3">
              <div className="p-3">
                <Button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  id="current-location-button"
                >
                  Current Location
                </Button>
              </div>
            </div>
          </div>

          <h1>
            <div className="row g-3 current-weather">
              <div className="col-4">
                <span className="current-range" id="current-high">
                  H: 47°
                </span>
                <span className="current-range" id="current-low">
                  L: 34°
                </span>
                <div id="current-location">Portland</div>
                <div className="weather-details" id="weather-condition">
                  Partly Cloudy
                </div>
                <div className="weather-details" id="wind-speed">
                  Wind: 4 mph
                </div>
              </div>
              <div className="col-4">
                <div>
                  <img
                    id="main-icon"
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="Party Sunny with Clouds and Rain"
                  ></img>
                </div>
              </div>
              <div className="col-4">
                <div className="current-temp" id="current-temp">
                  40ºF
                </div>
                <div className="current-day">Sunday</div>
                <div className="current-time">10:46 AM PT</div>
              </div>
            </div>
          </h1>
          <div className="weekly-weather" id="forecast"></div>
        </div>
      </div>
      <small className="source-link">
        <a href="https://github.com/cj-baker/Weather-Application">
          Source Code
        </a>
        <span className="coder">by Casey Baker </span>
      </small>
    </body>
  );
}

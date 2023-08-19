import "./App.css";
import { Container } from "react-bootstrap";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Container className="container">
        <Weather defaultCity="Seattle" />
      </Container>
      <small className="source-link">
        <span>This app was coded by </span>
        <a href="https://github.com/cj-baker">Casey Baker</a>
        <span> and is </span>
        <a href="https://github.com/cj-baker/react-weather-app">Open Sourced</a>
      </small>
    </div>
  );
}

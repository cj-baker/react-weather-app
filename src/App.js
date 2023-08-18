import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <body className="App">
      <div className="container">
        <Weather defaultCity="Seattle" />
      </div>
      <small className="source-link">
        <span>This app was coded by </span>
        <a href="https://github.com/cj-baker">Casey Baker</a>
        <span> and is </span>
        <a href="https://github.com/cj-baker/react-weather-app">Open Sourced</a>
      </small>
    </body>
  );
}

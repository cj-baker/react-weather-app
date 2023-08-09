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
        This app was coded by
        <a href="https://github.com/cj-baker/Weather-Application">
          Casey Baker
        </a>
        and is
        <a href="https://github.com/cj-baker/Weather-Application">
          Open Sourced
        </a>
      </small>
    </body>
  );
}

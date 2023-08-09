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
        <a href="https://github.com/cj-baker/Weather-Application">
          Source Code
        </a>
        <span className="coder">by Casey Baker </span>
      </small>
    </body>
  );
}

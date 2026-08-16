import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import MapValues from "./MapValues";
function App() {
  return (
    <React.Fragment>
      <h1>Healthy Food Items List</h1>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Ghee
          <span className="badge text-bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Milk
          <span className="badge text-bg-primary rounded-pill">2</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Rice
          <span className="badge text-bg-primary rounded-pill">1</span>
        </li>
      </ul>
      <MapValues></MapValues>
    </React.Fragment>
  );
}

export default App;

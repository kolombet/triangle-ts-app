import React from "react";
import List from "./List.jsx";
import Form from "./Form.jsx";
import Random from "./Random.jsx";

const App = () => (
  <div>
    <div data-ts="Board">
      <div data-ts="Panel">
        <h2>Triangles:</h2>
        <List />
        <Random />
      </div>
    </div>
    <div data-ts="Board">
      <div data-ts="Panel">
        <h2>Add a new triangle</h2>
        <Form />
      </div>
    </div>
  </div>
);
export default App;

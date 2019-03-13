import React from "react";
import List from "./List.jsx";
import Form from "./Form.jsx";
import ControlBar from "./ControlBar.jsx";

const App = () => (
  <div>
    <div data-ts="Board">
      <div data-ts="Panel">
        <ControlBar />
        <List />
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

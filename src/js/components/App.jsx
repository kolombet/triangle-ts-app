import React from "react";
import TrianglesList from "./TrianglesList.jsx";
import Form from "./Form.jsx";
import ControlBar from "./ControlBar.jsx";
import Board from "./Board";

const App = () => (
  <div>
    <Board>
      <ControlBar />
      <TrianglesList />
    </Board>
    <Board>
      <h2>Add a new triangle</h2>
      <Form />
    </Board>
  </div>
);
export default App;

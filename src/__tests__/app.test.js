import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import store from "../js/store/index";
import Home from "../js/screens/Home";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Home />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

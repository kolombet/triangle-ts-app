//look for tests in ./src/__tests__ directory

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { create } from "react-test-renderer";

import store from "./js/store/index";
import App from "./js/components/App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
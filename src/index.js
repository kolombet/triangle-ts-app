import React from "react";
import ReactDOM from "react-dom";
import store from "./js/store/index";
import { Provider } from "react-redux";
import Home from "./js/screens/Home";

window["ts"].ui.ready(function() {
  main();
});

function main() {
  ReactDOM.render(
    <Provider store={store}>
      <Home />
    </Provider>,
    document.getElementById("root")
  );
}

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import store from "../js/store/index";

import App from "../js/components/App";
import Button from "../js/components/Button";
import ErrorMessage from "../js/components/ErrorMessage";
import Board from "../js/components/Board";
import TriangleSideInput from "../js/components/TriangleSideInput";

describe("Button component", () => {
  test("Enabled button matches the snapshot", () => {
    const component = create(<Button title="test"/>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Disabled button matches the snapshot", () => {
    const component = create(<Button disabled={true} title="test"/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("Error message component", () => {
  test("Error message matches the snapshot", () => {
    const component = create(<ErrorMessage title="title" description="description"/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("Board component", () => {
  test("Board component matches the snapshot", () => {
    const component = create(<Board>test</Board>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("Triangle side input component", () => {
  test("Triangle side input matches the snapshot", () => {
    const component = create(<TriangleSideInput label="Side:" id="side" val={5}/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
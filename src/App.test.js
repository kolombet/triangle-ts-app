import React from "react";
import ReactDOM from "react-dom";
import App from "./js/components/App";
import * as validations from "./js/triangle/validations";
import store from "./js/store/index";
import { Provider } from "react-redux";

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

describe("Valid triangle", () => {
  it("It's valid, if sides can form triangle", () => {
    expect(validations.isInvalid(3, 4, 5)).toBe(false);
  });

  it("It's invalid, if one side too long", () => {
    expect(validations.isInvalid(100, 3, 4)).toBe(true);
  });

  it("It's invalid, if all sides on one line", () => {
    expect(validations.isInvalid(5, 2, 3)).toBe(true);
  });

  it("It's invalid, if any side is negative", () => {
    expect(validations.isInvalid(-2, 3, 4)).toBe(true);
  });

  it("It's invalid, if any side is zero", () => {
    expect(validations.isInvalid(0, 3, 4)).toBe(true);
  });
});

describe("Isosceles triangle", () => {
  it("Isosceles, if two sides are equal, and third not", () => {
    expect(validations.isIsosceles(5, 5, 10)).toBe(true);
  });

  it("Not isosceles, if all sides are different", () => {
    expect(validations.isIsosceles(1, 2, 3)).toBe(false);
  });

  it("Not isosceles, if all sides are equal", () => {
    expect(validations.isIsosceles(1, 1, 1)).toBe(false);
  });
});

describe("Scalene triangle", () => {
  it("Scalene, when all sides are different", () => {
    expect(validations.isScalene(123, 234, 534)).toBe(true);
  });

  it("Not scalene, if any equal sides", () => {
    expect(validations.isScalene(32, 32, 1)).toBe(false);
  });
});

describe("Equilateral triangle", () => {
  it("Equilateral, when all sides are equals", () => {
    expect(validations.isEquilateral(3, 3, 3)).toBe(true);
  });

  it("Not equilateral, if side different", () => {
    expect(validations.isEquilateral(3, 4, 5)).toBe(false);
  });
});

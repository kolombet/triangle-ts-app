import React, { Component } from "react";
import { isInvalid } from "../triangle/validations";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import TriangleSideInput from "../components/TriangleSideInput";
import PropTypes from "prop-types";

class Form extends Component {
  static propTypes = {
    addTriangle: PropTypes.func,
    addRandomTriangle: PropTypes.func
  };

  constructor() {
    super();
    this.state = this.getInitialState();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRandomClick = this.handleRandomClick.bind(this);
  }

  getInitialState() {
    return {
      sideA: "",
      sideB: "",
      sideC: ""
    };
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit() {
    const { sideA, sideB, sideC } = this.state;
    this.props.addTriangle({
      a: parseFloat(sideA),
      b: parseFloat(sideB),
      c: parseFloat(sideC)
    });
    this.setState(this.getInitialState());
  }

  handleRandomClick(event) {
    this.props.addRandomTriangle();
  }

  render() {
    const { sideA, sideB, sideC } = this.state;
    const isEmpty = value => isNaN(value) || value === "";
    const isAnyFieldEmpty = [sideA, sideB, sideC].filter(isEmpty).length > 0;
    const isError =
      !isAnyFieldEmpty &&
      isInvalid(parseFloat(sideA), parseFloat(sideB), parseFloat(sideC));
    return (
      <div>
        <form data-ts="Form" onSubmit={this.handleSubmit}>
          <fieldset>
            <TriangleSideInput
              label="Side A:"
              id="sideA"
              length={sideA}
              onValueChange={this.handleChange}
            />
            <TriangleSideInput
              label="Side B:"
              id="sideB"
              length={sideB}
              onValueChange={this.handleChange}
            />
            <TriangleSideInput
              label="Side C:"
              id="sideC"
              length={sideC}
              onValueChange={this.handleChange}
            />
          </fieldset>
          {isError && (
            <ErrorMessage
              title="Triangle is invalid"
              description="Entered sides do not form a valid triangle"
            />
          )}
        </form>
        <Button
          disabled={isAnyFieldEmpty || isError}
          title="Add Triangle"
          onClick={this.handleSubmit}
        />
        <Button
          onClick={this.handleRandomClick}
          title="Create random triangle"
        />
      </div>
    );
  }
}

export default Form;

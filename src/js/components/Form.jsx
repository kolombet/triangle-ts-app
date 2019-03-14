import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addTriangle } from "../actions/index";
import { isInvalid } from "../triangle/validations";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";
import TriangleSideInput from "./TriangleSideInput";

function mapDispatchToProps(dispatch) {
  return {
    addTriangle: payload => dispatch(addTriangle(payload))
  };
}

class AddTriangleForm extends Component {
  constructor() {
    super();
    this.state = this.getInitialState();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInitialState() {
    return {
      sideA: "",
      sideB: "",
      sideC: ""
    };
  }

  handleChange(event) {
    const value = parseFloat(event.target.value);
    this.setState({ [event.target.id]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { sideA, sideB, sideC } = this.state;
    const id = uuidv1();
    this.props.addTriangle({ a: sideA, b: sideB, c: sideC, id });
    this.setState(this.getInitialState());
  }

  render() {
    const { sideA, sideB, sideC } = this.state;
    const isEmpty = sideA === "" && sideB === "" && sideC === "";
    const isError = !isEmpty && isInvalid(sideA, sideB, sideC);
    return (
      <form data-ts="Form" onSubmit={this.handleSubmit}>
        <fieldset>
          <TriangleSideInput
            label="Side A:"
            id="sideA"
            val={sideA}
            onValueChange={this.handleChange}
          />
          <TriangleSideInput
            label="Side B:"
            id="sideB"
            val={sideB}
            onValueChange={this.handleChange}
          />
          <TriangleSideInput
            label="Side C:"
            id="sideC"
            val={sideC}
            onValueChange={this.handleChange}
          />
        </fieldset>
        {isError && (
          <ErrorMessage
            title="Triangle is invalid"
            description="Entered sides do not form a real triangle"
          />
        )}
        <Button disabled={isEmpty || isError} title="Add Triangle" />
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(AddTriangleForm);

export default Form;

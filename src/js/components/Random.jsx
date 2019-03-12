import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addTriangle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addTriangle: payload => dispatch(addTriangle(payload))
  };
}
class ConnectedForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const id = uuidv1();
    this.props.addTriangle({ a: 3, b: 4, c: 5, id });
  }
  render() {
    return (
      <form data-ts="Form" onSubmit={this.handleSubmit}>
        <button data-ts="Button" type="submit" className="ts-primary">
          ADD RANDOM TRIANGLE
        </button>
      </form>
    );
  }
}
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);
export default Form;

import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addTriangle } from "../actions/index";
import { isInvalid } from "../triangle/validations";

function mapDispatchToProps(dispatch) {
  return {
    addTriangle: payload => dispatch(addTriangle(payload))
  };
}

class ErrorMessage extends React.PureComponent {
  render() {
    return (
      <dl className="ts-errors">
        <dt>Triangle is invalid</dt>
        <dd>Entered sides do not form a real triangle</dd>
      </dl>
    );
  }
}

class ConnectedForm extends Component {
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
    const isError = isInvalid(sideA, sideB, sideC);
    return (
      <form data-ts="Form" onSubmit={this.handleSubmit}>
        <fieldset>
          <label>
            <span>Side A:</span>
            <input
              required
              type="number"
              className="form-control"
              id="sideA"
              value={sideA}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <span>Side B:</span>
            <input
              required
              type="number"
              className="form-control"
              id="sideB"
              value={sideB}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <span>Side C:</span>
            <input
              required
              type="number"
              className="form-control"
              id="sideC"
              value={sideC}
              onChange={this.handleChange}
            />
          </label>
        </fieldset>

        {isError ? (
          <div>
            <ErrorMessage />
            <button
              disabled="disabled"
              data-ts="Button"
              type="submit"
              className="ts-primary"
            >
              ADD TRIANGLE
            </button>
          </div>
        ) : (
          <button data-ts="Button" type="submit" className="ts-primary">
            ADD TRIANGLE
          </button>
        )}
      </form>
    );
  }
}
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);
export default Form;

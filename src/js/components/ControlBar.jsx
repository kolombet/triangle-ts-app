import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import {
  clearTriangles,
  addTriangle,
  addRandomTriangle
} from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addRandomTriangle: () => dispatch(addRandomTriangle()),
    clearTriangles: () => dispatch(clearTriangles())
  };
}
class ControlBar extends Component {
  constructor() {
    super();
    this.handleRandomClick = this.handleRandomClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handleRandomClick(event) {
    const id = uuidv1();
    this.props.addRandomTriangle();
  }

  handleClearClick() {
    console.log("clear click");
    this.props.clearTriangles();
  }

  render() {
    return (
      <div className="control-bar">
        <button
          data-ts="Button"
          type="submit"
          className="ts-primary"
          onClick={this.handleRandomClick}
        >
          Create random triangle
        </button>
        <button
          data-ts="Button"
          type="submit"
          className="ts-primary"
          onClick={this.handleClearClick}
        >
          Clear list
        </button>
      </div>
    );
  }
}
const Form = connect(
  null,
  mapDispatchToProps
)(ControlBar);
export default Form;

import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { clearTriangles, addRandomTriangle } from "../actions/index";
import Button from "./Button";

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
    setTimeout(() => {
      this.props.addRandomTriangle();
    }, 100);
  }

  handleRandomClick(event) {
    const id = uuidv1();
    this.props.addRandomTriangle();
  }

  handleClearClick() {
    this.props.clearTriangles();
  }

  render() {
    return (
      <div className="control-bar">
        <Button
          onClick={this.handleRandomClick}
          title="Create randome triangle"
        />
        <Button onClick={this.handleClearClick} title="Clear list" />
      </div>
    );
  }
}
const Form = connect(
  null,
  mapDispatchToProps
)(ControlBar);
export default Form;

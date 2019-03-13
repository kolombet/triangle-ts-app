import React, { Component } from "react";
import { connect } from "react-redux";
import { clearTriangles, addRandomTriangle } from "../actions/index";
import Button from "./Button";
import styled from "styled-components";

const HorizontalLayout = styled.p`
  display: flex;
  flex-direction: row;
`;

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
    this.props.addRandomTriangle();
  }

  handleClearClick() {
    this.props.clearTriangles();
  }

  render() {
    return (
      <HorizontalLayout>
        <Button
          onClick={this.handleRandomClick}
          title="Create randome triangle"
        />
        <Button onClick={this.handleClearClick} title="Clear list" />
      </HorizontalLayout>
    );
  }
}
const Form = connect(
  null,
  mapDispatchToProps
)(ControlBar);
export default Form;

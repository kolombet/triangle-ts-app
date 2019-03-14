import React, { PureComponent } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

class ControlBar extends PureComponent {
  static propTypes = {
    triangles: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handleClearClick() {
    this.props.clearTriangles();
  }

  render() {
    return <Button onClick={this.handleClearClick} title="Clear list" />;
  }
}

export default ControlBar;

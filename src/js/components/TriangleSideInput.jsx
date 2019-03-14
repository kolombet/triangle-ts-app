import React, { PureComponent } from "react";
import ErrorMessage from "./ErrorMessage";
import PropTypes from "prop-types";

export default class TriangleSideInput extends PureComponent {
  static propTypes = {
    size: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    onValueChange: PropTypes.func
  };

  render() {
    const isError = parseInt(this.props.size) <= 0;
    console.log("iserror " + isError);
    return (
      <label>
        <span>{this.props.label}</span>
        <input
          required
          type="number"
          className="form-control"
          id={this.props.id}
          value={this.props.size}
          onChange={this.props.onValueChange}
        />
        {isError && (
          <ErrorMessage title="Triangle sides size must be positive" />
        )}
      </label>
    );
  }
}

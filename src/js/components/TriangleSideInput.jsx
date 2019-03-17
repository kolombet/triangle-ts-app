import React, { PureComponent } from "react";
import ErrorMessage from "./ErrorMessage";
import PropTypes from "prop-types";

export default class TriangleSideInput extends PureComponent {
  static propTypes = {
    length: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    onValueChange: PropTypes.func
  };

  render() {
    const isError = parseInt(this.props.length) <= 0;
    return (
      <label>
        <span>{this.props.label}</span>
        <input
          required
          type="number"
          className="form-control"
          id={this.props.id}
          value={this.props.length}
          onChange={this.props.onValueChange}
        />
        {isError && (
          <ErrorMessage title="Triangle sides length must be positive" />
        )}
      </label>
    );
  }
}

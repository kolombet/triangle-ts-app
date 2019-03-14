import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Button extends PureComponent { 
  static propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  }

  render() {
    return (
      <button
        disabled={this.props.disabled ? "disabled" : ""}
        data-ts="Button"
        type="submit"
        className="ts-primary"
        onClick={this.props.onClick}
      >
        {this.props.title}
      </button>
    );
  }
}

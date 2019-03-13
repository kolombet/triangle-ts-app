import React, { PureComponent } from "react";

export default class Button extends PureComponent {
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

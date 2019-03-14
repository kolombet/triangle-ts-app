import React, { PureComponent } from "react";

export default class Board extends PureComponent {
  render() {
    return (
      <div data-ts="Content">
        <div data-ts="Panel">{this.props.children}</div>
      </div>
    );
  }
}

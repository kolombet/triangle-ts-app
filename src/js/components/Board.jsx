import React from "react";

export default class Board extends React.PureComponent {
  render() {
    return (
      <div data-ts="Board">
        <div data-ts="Panel">{this.props.children}</div>
      </div>
    );
  }
}

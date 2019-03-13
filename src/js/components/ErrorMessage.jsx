import React, { PureComponent } from "react";

export default class ErrorMessage extends PureComponent {
  render() {
    return (
      <dl className="ts-errors">
        <dt>{this.props.title}</dt>
        {this.props.description && <dd>{this.props.description}</dd>}
      </dl>
    );
  }
}

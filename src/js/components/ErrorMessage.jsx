import React, { PureComponent } from "react";
import PropTypes from "prop-types";


export default class ErrorMessage extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  }

  render() {
    return (
      <dl className="ts-errors">
        <dt>{this.props.title}</dt>
        {this.props.description && <dd>{this.props.description}</dd>}
      </dl>
    );
  }
}
import React, { PureComponent } from "react";
import ErrorMessage from "./ErrorMessage";

export default class TriangleSideInput extends PureComponent {
    render() {
        const isError = this.props.val < 0;
        return (
            <label>
                <span>{this.props.label}</span>
                <input
                    required
                    type="number"
                    className="form-control"
                    id={this.props.id}
                    value={this.props.val}
                    onChange={this.props.onValueChange}
                />
                {isError && (
                    <ErrorMessage title="Triangle sides size must be positive" />
                )}
            </label>
        );
    }
}
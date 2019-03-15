import React, { PureComponent } from "react";
import styled from "styled-components";
import Board from "./Board";
import Button from "./Button";
import PropTypes from "prop-types";

const Info = styled.p`
  margin-bottom: 5px;
  color: #4f6b77;
`;

const Left = styled.div`
  margin-right: 10px;
`;

const Horizontal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const formatTypes = types => types.join(", ").toLowerCase();

const formatSides = triangle =>
  `Sides A: ${triangle.sideA} B: ${triangle.sideB} C: ${triangle.sideC}`;

export default class TriangleCard extends PureComponent {
  static propTypes = {
    triangle: PropTypes.object.isRequired,
    removeTriangle: PropTypes.func
  };

  handleRemoveClick = () => {
    const id = this.props.triangle.id;
    this.props.removeTriangle(id);
  }

  render() {
    const triangle = this.props.triangle;
    return (
      <Board>
        <Horizontal>
          <Left>
            <Info>{formatSides(triangle)}</Info>
            <Info>
              {triangle.types.length > 1 ? (
                <span>Triangle types: </span>
              ) : (
                <span>Triangle type: </span>
              )}
              {formatTypes(triangle.types)}
            </Info>
          </Left>
          <Button title="Remove" onClick={this.handleRemoveClick} />
        </Horizontal>
      </Board>
    );
  }
}

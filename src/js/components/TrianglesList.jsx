import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Board from "./Board";

const TriangleSide = styled.p`
  margin-bottom: 5px;
  color: #4f6b77;
`;

const mapStateToProps = state => {
  return { triangles: state.triangles };
};

const formatTypes = types => types.join(", ").toLowerCase();

class TrianglesList extends React.PureComponent {
  render() {
    const { triangles } = this.props;
    const isAnyTriangles = triangles.length > 0;
    return (
      <div>
        {isAnyTriangles && <h2>Triangles:</h2>}

        {triangles.map(triangle => (
          <Board key={triangle.id}>
            <TriangleSide>SideA: {triangle.sideA}</TriangleSide>
            <TriangleSide>SideB: {triangle.sideB}</TriangleSide>
            <TriangleSide>SideC: {triangle.sideC}</TriangleSide>
            <TriangleSide>
              {triangle.types.length > 1 ? (
                <span>Triangle types: </span>
              ) : (
                <span>Triangle type: </span>
              )}
              {formatTypes(triangle.types)}
            </TriangleSide>
          </Board>
        ))}
      </div>
    );
  }
}

const List = connect(mapStateToProps)(TrianglesList);
export default List;

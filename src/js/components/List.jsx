import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { triangles: state.triangles };
};

const formatTriangleData = triangle =>
  `Sides A=${triangle.sideA} B=${triangle.sideB} C=${triangle.sideC} Type: ${
    triangle.types
  }`;

class TrianglesList extends React.PureComponent {
  render() {
    const { triangles } = this.props;
    const isAnyTriangles = triangles.length > 0;
    return (
      <div>
        {isAnyTriangles && <h2>Triangles:</h2>}

        {triangles.map(triangle => (
          <div data-ts="Board" key={triangle.id}>
            <div data-ts="Panel">{formatTriangleData(triangle)}</div>
          </div>
        ))}
      </div>
    );
  }
}
// const TrianglesList = ({ triangles }) => (
//   <div>
//     {triangles.map(triangle => (
//       <div data-ts="Board" key={triangle.id}>
//         <div data-ts="Panel">{formatTriangleData(triangle)}</div>
//       </div>
//     ))}
//   </div>
// );

const List = connect(mapStateToProps)(TrianglesList);
export default List;

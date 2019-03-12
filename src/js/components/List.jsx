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
    console.log("123");
    return (
      <div>
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

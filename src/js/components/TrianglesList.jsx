import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TriangleCard from "./TriangleCard";

class TrianglesList extends PureComponent {
  static propTypes = {
    triangles: PropTypes.array.isRequired,
    removeTriangle: PropTypes.func
  };

  render() {
    const { triangles } = this.props;
    const isAnyTriangles = triangles.length > 0;
    return (
      <div>
        {isAnyTriangles && <h2>Triangles:</h2>}

        {triangles.map(triangle => (
          <TriangleCard
            triangle={triangle}
            removeTriangle={this.props.removeTriangle}
            key={triangle.id}
          />
        ))}
      </div>
    );
  }
}

export default TrianglesList;

import React from "react";
import TrianglesList from "../components/TrianglesList";
import Form from "./Form";
import ControlBar from "../components/ControlBar";
import ContentPanel from "../components/ContentPanel";
import Board from "../components/Board";
import { connect } from "react-redux";
import {
  addTriangle,
  removeTriangle,
  clearTriangles,
  addRandomTriangle
} from "../actions/index";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const mapStateToProps = state => {
  return { triangles: state.triangles };
};

function mapDispatchToProps(dispatch) {
  return {
    addTriangle: payload => dispatch(addTriangle(payload)),
    removeTriangle: payload => dispatch(removeTriangle(payload)),
    addRandomTriangle: () => dispatch(addRandomTriangle()),
    clearTriangles: () => dispatch(clearTriangles())
  };
}

class HomeScreen extends React.PureComponent {
  render() {
    const isAnyTriangles = this.props.triangles.length > 0;
    return (
      <ContentPanel>
        <Content>
          <Board>
            <h2>Add a new triangle</h2>
            <Form
              addTriangle={this.props.addTriangle}
              addRandomTriangle={this.props.addRandomTriangle}
            />
          </Board>
          {isAnyTriangles && (
            <Board>
              <ControlBar clearTriangles={this.props.clearTriangles} />
              <TrianglesList
                triangles={this.props.triangles}
                removeTriangle={this.props.removeTriangle}
              />
            </Board>
          )}
        </Content>
      </ContentPanel>
    );
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
export default Home;

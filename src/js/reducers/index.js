import {
  ADD_TRIANGLE,
  CLEAR_TRIANGLES,
  ADD_RANDOM_TRIANGLE
} from "../constants/action-types";
import { Triangle } from "../triangle/triangle";

const initialState = {
  triangles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_TRIANGLE) {
    const triangle = Triangle.create(action.payload);
    const data = Object.assign({}, state, {
      triangles: state.triangles.concat(triangle.getData())
    });
    return data;
  }
  if (action.type === CLEAR_TRIANGLES) {
    const data = Object.assign({}, state, {
      triangles: []
    });
    return data;
  }
  if (action.type === ADD_RANDOM_TRIANGLE) {
    const triangle = Triangle.createRandom();
    const data = Object.assign({}, state, {
      triangles: state.triangles.concat(triangle.getData())
    });
    return data;
  }
  return state;
}
export default rootReducer;

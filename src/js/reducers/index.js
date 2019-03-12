import { ADD_TRIANGLE } from "../constants/action-types";
import { Triangle } from "../triangle/triangle";

const initialState = {
  triangles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_TRIANGLE) {
    var triangle = Triangle.create(action.payload);
    var data = Object.assign({}, state, {
      triangles: state.triangles.concat(triangle.getData())
    });
    return data;
  }
  return state;
}
export default rootReducer;

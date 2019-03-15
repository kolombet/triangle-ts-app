import {
  ADD_TRIANGLE,
  REMOVE_TRIANGLE,
  CLEAR_TRIANGLES,
  ADD_RANDOM_TRIANGLE
} from "../constants/action-types";
import { Triangle } from "../triangle/triangle";

const initialState = {
  triangles: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRIANGLE:
      return {
        ...state,
        triangles: [
          Triangle.create(action.payload).getData(),
          ...state.triangles
        ]
      };
    case REMOVE_TRIANGLE: {
      return {
        ...state
      };
    }
    case CLEAR_TRIANGLES:
      return {
        ...state,
        triangles: []
      };
    case ADD_RANDOM_TRIANGLE:
      return {
        ...state,
        triangles: [Triangle.createRandom().getData(), ...state.triangles]
      };
    default:
      return state;
  }
}
export default rootReducer;

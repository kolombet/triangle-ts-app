import {
  ADD_TRIANGLE,
  REMOVE_TRIANGLE,
  CLEAR_TRIANGLES,
  ADD_RANDOM_TRIANGLE
} from "../constants/action-types";

export function addTriangle(payload) {
  return { type: ADD_TRIANGLE, payload };
}

export function removeTriangle(payload) {
  return { type: REMOVE_TRIANGLE, payload };
}

export function addRandomTriangle() {
  return { type: ADD_RANDOM_TRIANGLE };
}

export function clearTriangles() {
  return { type: CLEAR_TRIANGLES };
}

import { ADD_TRIANGLE } from "../constants/action-types";

export function addTriangle(payload) {
  return { type: ADD_TRIANGLE, payload };
}

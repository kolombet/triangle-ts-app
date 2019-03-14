import { getValidations } from "./validations";
import uuidv1 from "uuid";
import { Random } from "random-js";
import * as types from "./triangleTypes";
import type from "type-of";

export class Triangle {
  /**
   * @param {String} id
   * @param {Number} sideA
   * @param {Number} sideB
   * @param {Number} sideC
   */
  constructor(id, sideA, sideB, sideC) {
    if (
      type(id) !== "string" ||
      type(sideA) !== "number" ||
      type(sideB) !== "number" ||
      type(sideC) !== "number"
    ) {
      throw new Error("incorrect argument types");
    }

    const _private = {
      id,
      sideA,
      sideB,
      sideC
    };

    this.get = {
      get id() {
        return _private.id;
      },
      get sideA() {
        return _private.sideA;
      },
      get sideB() {
        return _private.sideB;
      },
      get sideC() {
        return _private.sideC;
      }
    };
  }

  /**
   * Creates triangle from object
   * @param {Object} data
   * @param {Number} data.a
   * @param {Number} data.b
   * @param {Number} data.c
   * @returns {Triangle} - Triangle instance with unique id.
   */
  static create(data) {
    return new Triangle(uuidv1(), data.a, data.b, data.c);
  }

  /**
   * Creates triangle with sides of random integer size from 1 to 5
   * @returns {Triangle} - Triangle instance with unique id.
   */
  static createRandom() {
    const id = uuidv1();
    const rand = () => new Random().integer(1, 5);
    const createRandomTriangle = () => new Triangle(id, rand(), rand(), rand());
    let triangle = createRandomTriangle();
    while (triangle.getTypes().indexOf(types.INVALID) !== -1) {
      triangle = createRandomTriangle();
    }
    return triangle;
  }

  /**
   * Finds triangle type by matching triangle sides with type validation functions.
   * @returns {Array} - All passed validations.
   */
  getTypes() {
    const validations = getValidations();
    const keys = Object.keys(validations);
    const { sideA, sideB, sideC } = this.get;
    return keys.filter(validation =>
      validations[validation](sideA, sideB, sideC)
    );
  }

  /**
   * Returns triangle sides data and it's type
   * @returns {Object} - plain triangle data for view rendering.
   */
  getData() {
    const data = this.get;
    const types = this.getTypes();
    return { ...data, types };
  }
}

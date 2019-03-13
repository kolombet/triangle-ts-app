import { getValidations } from "./validations";
import uuidv1 from "uuid";
import { Random } from "random-js";
import * as types from "./triangleTypes";

export class Triangle {
  /**
   * initialize triangle sides
   * @param {number} a
   * @param {number} b
   * @param {number} c
   */
  constructor(id, sideA, sideB, sideC) {
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

  static create(data) {
    const id = uuidv1();
    data.a = parseInt(data.a);
    data.b = parseInt(data.b);
    data.c = parseInt(data.c);
    return new Triangle(id, data.a, data.b, data.c);
  }

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

  getTypes() {
    const validations = getValidations();
    const keys = Object.keys(validations);
    const { sideA, sideB, sideC } = this.get;
    return keys.filter(validation =>
      validations[validation](sideA, sideB, sideC)
    );
  }

  getData() {
    const data = this.get;
    const types = this.getTypes();
    return { ...data, types };
  }
}

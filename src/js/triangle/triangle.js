import * as validations from "./validations";

const INVALID = "invalid";
const EQUILATERAL = "equileateral";
const ISOSCELES = "isosceles";
const SCALENE = "scalene";
const RIGHT = "right";

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
    data.a = parseInt(data.a);
    data.b = parseInt(data.b);
    data.c = parseInt(data.c);
    return new Triangle(data.id, data.a, data.b, data.c);
  }

  getValidations() {
    return {
      INVALID: validations.isInvalid,
      EQUILATERAL: validations.isEquilateral,
      ISOSCELES: validations.isIsosceles,
      RIGHT: validations.isRightAngled,
      SCALENE: validations.isScalene
    };
  }

  getTypes() {
    const validations = this.getValidations();
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

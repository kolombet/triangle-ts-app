import * as validations from "../js/triangle/validations";
import { Triangle } from "../js/triangle/triangle";
import * as types from "../js/triangle/triangleTypes";

describe("Valid triangle", () => {
  it("It's valid, if sides can form triangle", () => {
    expect(validations.isInvalid(3, 4, 5)).toBe(false);
  });

  it("It's invalid, if one side is too long", () => {
    expect(validations.isInvalid(100, 3, 4)).toBe(true);
  });

  it("It's invalid, if all sides are on one line", () => {
    expect(validations.isInvalid(5, 2, 3)).toBe(true);
  });

  it("It's invalid, if any side is negative", () => {
    expect(validations.isInvalid(-2, 3, 4)).toBe(true);
  });

  it("It's invalid, if any side is zero", () => {
    expect(validations.isInvalid(0, 3, 4)).toBe(true);
  });
});

describe("Triangle class", () => {
  it("It's valid, if triangle {3, 4, 5} is scalene right and pythagorean", () => {
    const triangle = Triangle.create({ a: 3, b: 4, c: 5 });
    let triangleTypes = triangle.getTypes();
    let scalene = triangleTypes.indexOf(types.SCALENE) >= 0;
    let pythagorean = triangleTypes.indexOf(types.PYTHAGOREAN) >= 0;
    let right = triangleTypes.indexOf(types.RIGHT) >= 0;
    expect(scalene && pythagorean && right).toBe(true);
  });

  it("It's incorrect, if triangle {3, 4, 5} is invalid, equilateral or isosceles", () => {
    const triangle = Triangle.create({ a: 3, b: 4, c: 5 });
    let triangleTypes = triangle.getTypes();
    let invalid = triangleTypes.indexOf(types.INVALID) >= 0;
    let equilateral = triangleTypes.indexOf(types.EQUILATERAL) >= 0;
    let isosceles = triangleTypes.indexOf(types.ISOSCELES) >= 0;
    expect(!invalid && !equilateral && !isosceles).toBe(true);
  });

  it("It's invalid, if triangle sides are impossible", () => {
    const triangle = Triangle.create({ a: 1, b: 2, c: 9 });
    let triangleTypes = triangle.getTypes();

    let invalid = triangleTypes.indexOf(types.INVALID) >= 0;

    let equilateral = triangleTypes.indexOf(types.EQUILATERAL) >= 0;
    let isosceles = triangleTypes.indexOf(types.ISOSCELES) >= 0;
    expect(invalid).toBe(true);
  });
});

describe("Isosceles triangle", () => {
  it("Isosceles, if two sides are equal, and third not", () => {
    expect(validations.isIsosceles(5, 5, 10)).toBe(true);
  });

  it("Not isosceles, if all sides are different", () => {
    expect(validations.isIsosceles(1, 2, 3)).toBe(false);
  });

  it("Not isosceles, if all sides are equal", () => {
    expect(validations.isIsosceles(1, 1, 1)).toBe(false);
  });
});

describe("Scalene triangle", () => {
  it("Scalene, when all sides are different", () => {
    expect(validations.isScalene(123, 234, 534)).toBe(true);
  });

  it("Not scalene, if any equal sides", () => {
    expect(validations.isScalene(32, 32, 1)).toBe(false);
  });
});

describe("Equilateral triangle", () => {
  it("Equilateral, when all sides are equals", () => {
    expect(validations.isEquilateral(3, 3, 3)).toBe(true);
  });

  it("Not equilateral, if side different", () => {
    expect(validations.isEquilateral(3, 4, 5)).toBe(false);
  });
});

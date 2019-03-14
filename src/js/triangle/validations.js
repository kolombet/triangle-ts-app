import * as types from "./triangleTypes";

/**
 * Checks triangle validity by two factors:
 * - Checks possibility of triangle with given sides, by the triangle inequality theorem.
 * - Checks if all triangle sides are positive values
 * @param {Number} sideA
 * @param {Number} sideB
 * @param {Number} sideC
 * @returns {Boolean} - Is triangle invalid
 */
export const isInvalid = (sideA, sideB, sideC) => {
  const isNegativeSided = sideA <= 0 || sideB <= 0 || sideC <= 0;

  const isImpossible =
    sideA >= sideB + sideC || sideC >= sideB + sideA || sideB >= sideA + sideC;

  return isNegativeSided || isImpossible;
};

/**
 * Checks if triangle is isosceles
 * @param {Number} sideA
 * @param {Number} sideB
 * @param {Number} sideC
 * @returns {Boolean} - Is triangle isosceles
 */
export const isIsosceles = (sideA, sideB, sideC) => {
  return (
    (sideA === sideB && sideC !== sideA) ||
    (sideB === sideC && sideA !== sideB) ||
    (sideC === sideA && sideB !== sideC)
  );
};

/**
 * Checks if triangle is scalene
 * @param {Number} sideA
 * @param {Number} sideB
 * @param {Number} sideC
 * @returns {Boolean} - Is triangle scalene
 */
export const isScalene = (sideA, sideB, sideC) => {
  return sideA !== sideB && sideB !== sideC;
};

/**
 * Checks if triangle is equilateral
 * @param {Number} sideA
 * @param {Number} sideB
 * @param {Number} sideC
 * @returns {Boolean} - Is triangle equilateral
 */
export const isEquilateral = (sideA, sideB, sideC) => {
  return sideA === sideB && sideB === sideC;
};

/**
 * Checks if triangle is right
 * @param {Number} sideA
 * @param {Number} sideB
 * @param {Number} sideC
 * @returns {Boolean} - Is triangle right
 */
export const isRightAngled = (sideA, sideB, sideC) => {
  return (
    Math.pow(sideA, 2) + Math.pow(sideB, 2) === Math.pow(sideC, 2) ||
    Math.pow(sideA, 2) + Math.pow(sideC, 2) === Math.pow(sideB, 2) ||
    Math.pow(sideC, 2) + Math.pow(sideB, 2) === Math.pow(sideA, 2)
  );
};

/**
 * Checks if triangle is pythagorean
 * @param {Number} sideA
 * @param {Number} sideB
 * @param {Number} sideC
 * @returns {Boolean} - Is triangle pythagorean
 */
export const isPythagorean = (sideA, sideB, sideC) => {
  const isInteger =
    Number.isInteger(sideA) &&
    Number.isInteger(sideB) &&
    Number.isInteger(sideC);
  return isInteger && isRightAngled(sideA, sideB, sideC);
};

/**
 * @returns {Object} - All possible triangle validations
 */
export const getValidations = () => {
  const validations = {};
  validations[types.INVALID] = isInvalid;
  validations[types.EQUILATERAL] = isEquilateral;
  validations[types.ISOSCELES] = isIsosceles;
  validations[types.RIGHT] = isRightAngled;
  validations[types.SCALENE] = isScalene;
  validations[types.PYTHAGOREAN] = isPythagorean;
  return validations;
};

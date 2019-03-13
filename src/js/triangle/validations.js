export const isIsosceles = (sideA, sideB, sideC) => {
  return (
    (sideA === sideB && sideC !== sideA) ||
    (sideB === sideC && sideA !== sideB) ||
    (sideC === sideA && sideB !== sideC)
  );
};

export const isScalene = (sideA, sideB, sideC) => {
  return sideA !== sideB && sideB !== sideC;
};

export const isEquilateral = (sideA, sideB, sideC) => {
  return sideA === sideB && sideB === sideC;
};

export const isRightAngled = (sideA, sideB, sideC) => {
  return (
    Math.pow(sideA, 2) + Math.pow(sideB, 2) === Math.pow(sideC, 2) ||
    Math.pow(sideA, 2) + Math.pow(sideC, 2) === Math.pow(sideB, 2) ||
    Math.pow(sideC, 2) + Math.pow(sideB, 2) === Math.pow(sideA, 2)
  );
};

export const isPythagorean = (sideA, sideB, sideC) => {
  const isInteger =
    Number.isInteger(sideA) &&
    Number.isInteger(sideB) &&
    Number.isInteger(sideC);
  return isInteger && isRightAngled(sideA, sideB, sideC);
};

export const isInvalid = (sideA, sideB, sideC) => {
  const isInvalid = sideA <= 0 || sideB <= 0 || sideC <= 0;

  const isImpossible =
    sideA >= sideB + sideC || sideC >= sideB + sideA || sideB >= sideA + sideC;

  return isInvalid || isImpossible;
};

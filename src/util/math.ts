export const fitQuadraticIntoThreePoints = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number
) => {
  const xx1 = x1 ** 2;
  const xx2 = x2 ** 2;
  const xx3 = x3 ** 2;
  const xd = (x1 - x2) * (x1 - x3) * (x2 - x3);
  const a = -(
    (-(x2 * y1) + x3 * y1 + x1 * y2 - x3 * y2 - x1 * y3 + x2 * y3) /
    xd
  );
  const b = -(
    (xx2 * y1 - xx3 * y1 - xx1 * y2 + xx3 * y2 + xx1 * y3 - xx2 * y3) /
    xd
  );
  const c = -(
    (-(xx2 * x3 * y1) +
      x2 * xx3 * y1 +
      xx1 * x3 * y2 -
      x1 * xx3 * y2 -
      xx1 * x2 * y3 +
      x1 * xx2 * y3) /
    xd
  );

  return (x: number) => a * x ** 2 + b * x + c;
};

export type Fn = (x: number) => number;

export const lerp =
  (omin: number, omax: number, nmin: number, nmax: number) => (v: number) =>
    nmin + ((nmax - nmin) * (v - omin)) / (omax - omin);

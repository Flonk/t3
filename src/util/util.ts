export const round2 = (x: number) => Math.round(x * 100) / 100;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const safeCast = <T = any>(x: unknown): T => {
  return x as T;
};

export const unsafeCast = safeCast;

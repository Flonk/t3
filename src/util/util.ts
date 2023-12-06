// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const safeCast = <T = any>(x: unknown): T | undefined => {
  return x as T;
};

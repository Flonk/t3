export const easing = {
  sawtooth: (x: number) => {
    const f = x % 1;
    return f < 0.5 ? 2 * f : 2 * (1 - f);
  },
};

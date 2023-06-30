import chroma from "chroma-js";
import namer from "color-namer";
import { fitQuadraticIntoThreePoints } from "./math";
import { clampChroma } from "culori";

export const CENTER_LUMINANCE = 0.71;

export const maxChroma = (hue: number, luminance: number) =>
  clampChroma({ mode: "oklch", l: luminance, c: 1, h: hue }, "oklch").c;

export const tailwindLightnessCubic = (x: number) =>
  x == 10 ? 0.27 : 0.000925 * x ** 3 - 0.01627 * x ** 2 + 0.00593 * x + 0.976;

export const tailwindChromaQuadratic = (maxChroma: number) => {
  const fn = fitQuadraticIntoThreePoints(0, 0.02, 5, maxChroma, 9, 0.09);
  return (i: number) => (i === 10 ? 0.06 : fn(i));
};
export const tailwindChromaQuadraticByHue = (hue: number) =>
  tailwindChromaQuadratic(Math.min(0.11, maxChroma(hue, CENTER_LUMINANCE)));

export const getColorName = (color: string | number | chroma.Color) => {
  const hex = chroma(color).hex();
  const candidates = namer(hex, { pick: ["ntc"] }).ntc;
  const names = candidates.map((x) => {
    let targetName = x.name;
    if (x.name.length > 12) {
      const sorted = x.name.split(" ");
      sorted.sort((a, b) => b.length - a.length);
      targetName = sorted[0];
    }
    return targetName
      .split(" ")
      .join("")
      .replace(/[^[a-zA-Z]/g, "");
  });
  return names[0];
};

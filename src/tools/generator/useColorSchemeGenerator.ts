/* eslint-disable react-hooks/exhaustive-deps */
import chroma from "chroma-js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { drawGradient, graph } from "../../util/canvas";
import {
  CENTER_LUMINANCE,
  getColorName,
  tailwindChromaQuadraticByHue,
  tailwindLightnessCubic,
} from "../../util/color";
import { Fn, fitQuadraticIntoThreePoints } from "../../util/math";
import { ThemedColors, useColors } from "../../ui/ColorsProvider";

export type ChromaType = "tailwind" | "quadratic" | "linear";
export type HueType = "quadratic" | "linear";
export type UseColorSchemeProps = {
  ref: React.RefObject<HTMLCanvasElement>;
  lightnessRef: React.RefObject<HTMLCanvasElement>;
  chromaRef: React.RefObject<HTMLCanvasElement>;
  hueRef: React.RefObject<HTMLCanvasElement>;
};

const hue = 149.58;
const hueOffsetLeft = 6.25;
const hueOffsetRight = 3.25;
const sampleHueQuadratic = fitQuadraticIntoThreePoints(
  0,
  hue + hueOffsetLeft,
  5,
  hue,
  10,
  hue + hueOffsetRight
);

export const useCanvas = (
  ref: React.RefObject<HTMLCanvasElement>,
  callback: (ctx: HTMLCanvasElement) => void
) => {
  useEffect(() => {
    if (ref.current) {
      callback(ref.current);
    }
  }, [ref, callback]);
};

export const useColorSchemeGenerator = ({
  ref,
  lightnessRef,
  chromaRef,
  hueRef,
}: UseColorSchemeProps) => {
  const [hue, setHue] = useState(149.58);

  const [lightnessFn, setLightnessFn] = useState<Fn>(
    () => tailwindLightnessCubic
  );
  const [chromaFn, setChromaFn] = useState<Fn>(() =>
    tailwindChromaQuadraticByHue(hue)
  );
  const [hueFn, setHueFn] = useState<Fn>(() => sampleHueQuadratic);

  const generateHex = useCallback(
    (i: number) => chroma.oklch(lightnessFn(i), chromaFn(i), hueFn(i)).hex(),
    [lightnessFn, chromaFn, hueFn]
  );

  const { setColors } = useColors();
  useEffect(() => {
    const result = {} as ThemedColors;
    {
      [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].forEach((x, i) => {
        result[`themed${x}` as keyof ThemedColors] = chroma
          .oklch(lightnessFn(i), chromaFn(i), hueFn(i))
          .hex();
      });
    }
    setColors(result);
  }, [lightnessFn, chromaFn, hueFn]);

  const returnValue = useMemo(
    () => ({
      hue,
      setHue,
      lightnessFn,
      setLightnessFn: (fn: Fn) => setLightnessFn(() => fn),
      chromaFn,
      setChromaFn: (fn: Fn) => setChromaFn(() => fn),
      hueFn,
      setHueFn: (fn: Fn) => setHueFn(() => fn),
      generateHex,
      baseColorName: getColorName(
        chroma.oklch(CENTER_LUMINANCE, chromaFn(5), hue)
      ),
    }),
    [
      hue,
      setHue,
      lightnessFn,
      setLightnessFn,
      chromaFn,
      setChromaFn,
      hueFn,
      setHueFn,
      generateHex,
    ]
  );

  useCanvas(ref, drawGradient);
  useEffect(() => {
    if (lightnessRef.current)
      graph(lightnessFn, lightnessRef.current, returnValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightnessRef, hueFn, chromaFn, lightnessFn, hue]);
  useEffect(() => {
    if (chromaRef.current) graph(chromaFn, chromaRef.current, returnValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chromaRef, hueFn, chromaFn, lightnessFn, hue]);
  useEffect(() => {
    if (hueRef.current) graph(hueFn, hueRef.current, returnValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hueRef, hueFn, chromaFn, lightnessFn, hue]);

  return returnValue;
};

export type UseColorSchemeGenerator = ReturnType<
  typeof useColorSchemeGenerator
>;

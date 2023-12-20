/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { Page } from "../../ui/Page";
import { H1 } from "../../ui/Typography";
import { Card } from "./Card";
import { ChromaSelector } from "./ChromaSelector";
import { HueSelector } from "./HueSelector";
import { JsonResult } from "./JsonResult";
import { LightnessSelector } from "./LightnessSelector";
import { SwatchList } from "./SwatchList";
import { useColorSchemeGenerator } from "./useColorSchemeGenerator";

export const ShadesGenerator = () => {
  useEffect(() => {
    document.title = "Tailwind Shades Generator - T3";
  }, []);

  const ref = useRef<HTMLCanvasElement>(null);
  const lightnessRef = useRef<HTMLCanvasElement>(null);
  const chromaRef = useRef<HTMLCanvasElement>(null);
  const hueRef = useRef<HTMLCanvasElement>(null);

  const generator = useColorSchemeGenerator({
    ref,
    lightnessRef,
    chromaRef,
    hueRef,
  });
  const { hue, setChromaFn, hueFn, lightnessFn, setLightnessFn } = generator;

  return (
    <Page title="QR Code Generator" className="max-w-2xl px-0">
      <div className="flex flex-col items-center xl:grid grid-cols-[repeat(2,max-content)]">
        <div className="col-span-2">
          <H1 className="px-2">Tailwind Shades Generator 😎</H1>
        </div>
        <div className="col-span-2">
          <SwatchList generator={generator} />
        </div>
        <div className="grid grid-rows-[repeat(3,max-content)]">
          <HueSelector
            generator={generator}
            ref={{ hue: hueRef, graph: ref } as any}
          />
          <ChromaSelector
            setChromaFn={setChromaFn}
            hueFn={hueFn}
            baseHue={hue}
            ref={chromaRef}
            lightnessFn={lightnessFn}
          />
          <LightnessSelector
            setLightnessFn={setLightnessFn}
            ref={lightnessRef}
          />
        </div>
        <div className="grid grid-rows-[repeat(2,max-content)]">
          <JsonResult generator={generator} />
          <Card className="w-72">
            <div className="text-left p-2 text-xs">
              <p>Generate 11 shades of a color, tailwind-style.</p>
              <p className="mt-4">
                Colors generated with this tool should be tailwind-compatible,
                by that I mean luminance values for individual colors are close
                to values found in the tailwind default palette.
              </p>
              <p className="mt-4">
                Calculations occur in OKHCL color space, to ensure constant
                luminance/brightness for every palette generated.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Page>
  );
};

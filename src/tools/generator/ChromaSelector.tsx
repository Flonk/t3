/* eslint-disable react-hooks/exhaustive-deps */
import { FC, forwardRef, useEffect, useMemo, useState } from "react";
import {
  CENTER_LUMINANCE,
  maxChroma,
  tailwindChromaQuadratic,
} from "../../util/color";
import { Fn, fitQuadraticIntoThreePoints } from "../../util/math";
import { LabeledRange, LabeledSelect, PrimaryButton } from "./LabeledInput";
import { CardWithGraph } from "./CardWithGraph";

export type ChromaType = "tailwind" | "quadratic";
type ChromaTypeSelectorProps = {
  chromaType: ChromaType;
  setChromaType: (ChromaType: ChromaType) => void;
};

export const ChromaTypeSelector: FC<ChromaTypeSelectorProps> = ({
  chromaType,
  setChromaType,
}) => {
  return (
    <LabeledSelect
      label="type"
      onChange={(value) => setChromaType(value as ChromaType)}
      value={chromaType}
    >
      <option value="tailwind">tailwind</option>
      <option value="quadratic">quadratic</option>
    </LabeledSelect>
  );
};

type ChromaSelectorProps = {
  setChromaFn: (ChromaFn: Fn) => void;
  lightnessFn: Fn;
  hueFn: Fn;
  baseHue: number;
};

const TailwindChromaControls: FC<ChromaSelectorProps> = ({
  setChromaFn,
  hueFn,
  baseHue,
}) => {
  const max = useMemo(() => maxChroma(hueFn(5), CENTER_LUMINANCE), [baseHue]);
  const [chroma, setChroma] = useState(Math.min(0.11, max));
  const leftChroma = useMemo(() => tailwindChromaQuadratic(0)(0), []);
  const rightChroma = useMemo(() => tailwindChromaQuadratic(0)(10), []);

  useEffect(() => {
    setChromaFn(tailwindChromaQuadratic(chroma));
  }, [chroma]);

  return (
    <>
      <LabeledRange
        header="chroma"
        label={`${Number(chroma.toFixed(2))}, safe max ${max.toFixed(2)}`}
        min={Math.max(leftChroma, rightChroma)}
        max={max * 1.5}
        value={chroma}
        onChange={(x) => {
          setChroma(x);
          setChromaFn(tailwindChromaQuadratic(x));
        }}
        step={0.0001}
      />
      <div className="flex justify-end mt-2">
        <PrimaryButton
          onClick={() => {
            setChroma(Math.min(0.11, max));
          }}
        >
          Reset
        </PrimaryButton>
      </div>
    </>
  );
};

const QuadraticChromaControls: FC<ChromaSelectorProps> = ({
  setChromaFn,
  hueFn,
  baseHue,
  lightnessFn,
}) => {
  const max = useMemo(() => maxChroma(baseHue, CENTER_LUMINANCE), [baseHue]);
  const maxLeft = useMemo(
    () => maxChroma(hueFn(0), lightnessFn(0)),
    [hueFn, lightnessFn]
  );
  const maxRight = useMemo(
    () => maxChroma(hueFn(10), lightnessFn(10)),
    [hueFn, lightnessFn]
  );
  const [chroma, setChroma] = useState(Math.min(0.11, max));
  const [leftChroma, setLeftChroma] = useState(0.04);
  const [rightChroma, setRightChroma] = useState(0.06);

  useEffect(() => {
    setChromaFn(
      fitQuadraticIntoThreePoints(0, leftChroma, 5, chroma, 10, rightChroma)
    );
  }, [chroma, leftChroma, rightChroma]);

  return (
    <>
      <LabeledRange
        header="chroma left"
        label={`${Number(leftChroma.toFixed(2))}, safe max ${maxLeft.toFixed(
          2
        )}`}
        min={0}
        max={maxLeft * 1.5}
        value={leftChroma}
        onChange={(x) => {
          setLeftChroma(x);
        }}
        step={maxLeft / 100}
      />
      <LabeledRange
        header="chroma"
        label={`${Number(chroma.toFixed(2))}, safe max ${max.toFixed(2)}`}
        min={0}
        max={max * 1.5}
        value={chroma}
        onChange={(x) => {
          setChroma(x);
        }}
        step={max / 100}
      />
      <LabeledRange
        header="chroma right"
        label={`${Number(rightChroma.toFixed(2))}, safe max ${maxRight.toFixed(
          2
        )}`}
        min={0}
        max={maxRight * 1.5}
        value={rightChroma}
        onChange={(x) => {
          setRightChroma(x);
        }}
        step={maxRight / 100}
      />
      <div className="flex justify-end mt-2">
        <PrimaryButton
          onClick={() => {
            setChroma(Math.min(0.11, max));
            setLeftChroma(0.04);
            setRightChroma(0.06);
          }}
        >
          Reset
        </PrimaryButton>
      </div>
    </>
  );
};

const ChromaControlSelector: FC<ChromaSelectorProps> = ({
  setChromaFn,
  baseHue,
  hueFn,
  lightnessFn,
}) => {
  const [ChromaType, setChromaType] = useState<ChromaType>("tailwind");
  return (
    <div>
      <ChromaTypeSelector
        chromaType={ChromaType}
        setChromaType={setChromaType}
      />
      {ChromaType === "quadratic" ? (
        <QuadraticChromaControls
          setChromaFn={setChromaFn}
          hueFn={hueFn}
          baseHue={baseHue}
          lightnessFn={lightnessFn}
        />
      ) : (
        <TailwindChromaControls
          setChromaFn={setChromaFn}
          hueFn={hueFn}
          baseHue={baseHue}
          lightnessFn={lightnessFn}
        />
      )}
    </div>
  );
};

export const ChromaSelector = forwardRef<
  HTMLCanvasElement,
  ChromaSelectorProps
>(({ setChromaFn, baseHue, hueFn, lightnessFn }, ref) => {
  return (
    <CardWithGraph header="Chroma" ref={ref}>
      <ChromaControlSelector
        setChromaFn={setChromaFn}
        hueFn={hueFn}
        baseHue={baseHue}
        lightnessFn={lightnessFn}
      />
    </CardWithGraph>
  );
});

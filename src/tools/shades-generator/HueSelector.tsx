/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, forwardRef, useEffect, useState } from "react";
import { fitQuadraticIntoThreePoints } from "../../util/math";
import { InsetWithGraph } from "./CardWithGraph";
import { LabeledRange, LabeledSelect, PrimaryButton } from "./LabeledInput";
import { UseColorSchemeGenerator } from "./useColorSchemeGenerator";

export type HueType = "quadratic" | "linear";
type HueTypeSelectorProps = {
  HueType: HueType;
  setHueType: (HueType: HueType) => void;
};

export const HueTypeSelector: FC<HueTypeSelectorProps> = ({
  HueType,
  setHueType,
}) => {
  return (
    <LabeledSelect
      label="type"
      value={HueType}
      onChange={(x) => setHueType(x as HueType)}
    >
      <option value="linear">linear</option>
      <option value="quadratic">quadratic</option>
    </LabeledSelect>
  );
};

type HueSelectorProps = {
  generator: UseColorSchemeGenerator;
};

const QuadraticHueControls: FC<HueSelectorProps> = ({ generator }) => {
  const [leftHue, setLeftHue] = useState(0);
  const [rightHue, setRightHue] = useState(0);
  const { hue: baseHue, setHueFn } = generator;

  useEffect(() => {
    setHueFn(
      fitQuadraticIntoThreePoints(
        0,
        baseHue + leftHue,
        5,
        baseHue,
        10,
        baseHue + rightHue
      )
    );
  }, [baseHue, leftHue, rightHue]);

  return (
    <>
      <LabeledRange
        header="hue offset light"
        label={`${Number(leftHue.toFixed(2))}`}
        min={-40}
        max={40}
        value={leftHue}
        onChange={(x) => {
          setLeftHue(x);
          setHueFn(
            fitQuadraticIntoThreePoints(
              0,
              baseHue + leftHue,
              5,
              baseHue,
              10,
              baseHue + rightHue
            )
          );
        }}
        step={0.0001}
      />
      <LabeledRange
        header="hue offset dark"
        label={`${Number(rightHue.toFixed(2))}`}
        min={-40}
        max={40}
        value={rightHue}
        onChange={(x) => {
          setRightHue(x);
          setHueFn(
            fitQuadraticIntoThreePoints(
              0,
              baseHue + leftHue,
              5,
              baseHue,
              10,
              baseHue + rightHue
            )
          );
        }}
        step={0.0001}
      />
      <div className="flex justify-end mt-2">
        <PrimaryButton
          onClick={() => {
            setLeftHue(0);
            setRightHue(0);
          }}
        >
          Reset
        </PrimaryButton>
      </div>
    </>
  );
};

const LinearHueControls: FC<HueSelectorProps> = ({ generator }) => {
  const [offset, setOffset] = useState(0);
  const { setHueFn, hue: baseHue } = generator;

  useEffect(() => {
    setHueFn((x) => baseHue + ((x - 5) / 5) * offset);
  }, [baseHue, offset]);

  return (
    <>
      <LabeledRange
        header="hue offset"
        label={`${Number(offset.toFixed(2))}`}
        min={-40}
        max={40}
        value={offset}
        onChange={(x) => {
          setOffset(x);
        }}
        step={0.0001}
      />
      <div className="flex justify-end mt-2">
        <PrimaryButton
          onClick={() => {
            setOffset(0);
          }}
        >
          Reset
        </PrimaryButton>
      </div>
    </>
  );
};

const HueControlSelector: FC<HueSelectorProps> = ({ generator }) => {
  const [HueType, setHueType] = useState<HueType>("linear");
  return (
    <div>
      <HueTypeSelector HueType={HueType} setHueType={setHueType} />
      {HueType === "quadratic" ? (
        <QuadraticHueControls generator={generator} />
      ) : HueType === "linear" ? (
        <LinearHueControls generator={generator} />
      ) : null}
    </div>
  );
};

type HueSliderProps = {
  setBaseHue: (hue: number) => void;
  baseHue: number;
};
const HueSlider = forwardRef<HTMLCanvasElement, HueSliderProps>(
  ({ baseHue, setBaseHue }, ref) => {
    return (
      <div className="h-4 box-content max-w-min mb-2 rounded-md mx-auto">
        <div className="rounded-md overflow-hidden">
          <canvas width={470} height={20} ref={ref} />
        </div>
        <div className="relative top-[-0.8rem]">
          <input
            type="range"
            min={0}
            max={360}
            step={0.1}
            className="w-full"
            value={baseHue}
            onChange={(e) => setBaseHue(parseFloat(e.target.value))}
          />
        </div>
      </div>
    );
  }
);

type RefType = {
  graph: HTMLCanvasElement;
  hue: HTMLCanvasElement;
};
export const HueSelector = forwardRef<RefType, HueSelectorProps>(
  ({ generator }, ref) => {
    const { hue: baseHue, setHue: setBaseHue } = generator;
    const { hue, graph } = ref as any;
    return (
      <InsetWithGraph
        header="Hue"
        ref={hue}
        belowHeader={
          <HueSlider ref={graph} baseHue={baseHue} setBaseHue={setBaseHue} />
        }
      >
        <HueControlSelector generator={generator} />
      </InsetWithGraph>
    );
  }
);

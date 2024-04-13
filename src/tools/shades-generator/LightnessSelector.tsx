/* eslint-disable react-hooks/exhaustive-deps */
import { FC, forwardRef, useEffect, useState } from "react";
import { tailwindLightnessCubic } from "../../util/color";
import { Fn } from "../../util/math";
import { InsetWithGraph } from "./CardWithGraph";
import { LabeledSelect } from "./LabeledInput";

export type LightnessType = "tailwind" | "linear";
type LightnessTypeSelectorProps = {
  lightnessType: LightnessType;
  setLightnessType: (lightnessType: LightnessType) => void;
};

export const LightnessTypeSelector: FC<LightnessTypeSelectorProps> = ({
  lightnessType,
  setLightnessType,
}) => {
  return (
    <LabeledSelect
      label="ye"
      value={lightnessType}
      onChange={(x) => setLightnessType(x as LightnessType)}
    >
      <option value="tailwind">tailwind</option>
      <option value="linear">linear</option>
    </LabeledSelect>
  );
};

type LightnessSelectorProps = {
  setLightnessFn: (lightnessFn: Fn) => void;
};

const TailwindLightnessControls: FC<LightnessSelectorProps> = ({
  setLightnessFn,
}) => {
  useEffect(() => {
    setLightnessFn(tailwindLightnessCubic);
  }, []);

  return null;
};

const LinearLightnessControls: FC<LightnessSelectorProps> = ({
  setLightnessFn,
}) => {
  useEffect(() => {
    setLightnessFn((x) => {
      if (x < 5) return 0.975 - (0.975 - 0.71) * (x / 5);
      return 0.71 - (0.71 - 0.27) * ((x - 5) / 5);
    });
  }, []);

  return null;
};

const LightnessControlSelector: FC<LightnessSelectorProps> = ({
  setLightnessFn,
}) => {
  const [lightnessType, setLightnessType] = useState<LightnessType>("tailwind");
  return (
    <div>
      <LightnessTypeSelector
        lightnessType={lightnessType}
        setLightnessType={setLightnessType}
      />
      {lightnessType === "linear" ? (
        <LinearLightnessControls setLightnessFn={setLightnessFn} />
      ) : (
        <TailwindLightnessControls setLightnessFn={setLightnessFn} />
      )}
    </div>
  );
};

export const LightnessSelector = forwardRef<
  HTMLCanvasElement,
  LightnessSelectorProps
>(({ setLightnessFn }, ref) => {
  return (
    <InsetWithGraph header="Lightness" ref={ref}>
      <LightnessControlSelector setLightnessFn={setLightnessFn} />
    </InsetWithGraph>
  );
});

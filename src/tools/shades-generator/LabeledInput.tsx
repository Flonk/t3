import { FC, PropsWithChildren } from "react";
import { useColors } from "../../ui/ColorsProvider";

type LabelProps = PropsWithChildren & {
  header: string;
};
const Label: FC<LabelProps> = ({ header, children }) => {
  const { colors } = useColors();
  return (
    <label className="text-xs text-left">
      <span
        className="font-bold mr-1"
        style={{
          color: colors.themed700,
        }}
      >
        {header}
      </span>
      {children}
    </label>
  );
};

type LabeledInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  header: string;
};

export const LabeledInput = ({
  label,
  value,
  onChange,
  header,
}: LabeledInputProps) => {
  return (
    <div className="flex flex-col">
      <Label header={header}>{label}</Label>
      <input
        className="rounded-md border border-gray-300 p-1 text-sm w-40"
        value={value}
        onChange={(x) => onChange(x.target.value)}
      />
    </div>
  );
};

export type LabeledRangeProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  header: string;
};

export const LabeledRange = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  header,
}: LabeledRangeProps) => {
  const { colors } = useColors();
  return (
    <div
      className="flex flex-col mt-2 rounded-md p-2"
      style={{ border: `1px solid ${colors.themed600}` }}
    >
      <Label header={header}>{label}</Label>
      <input
        className="rounded-md border border-gray-300 p-1 text-sm"
        type="range"
        value={value}
        onChange={(x) => onChange(Number(x.target.value))}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
};

export type LabeledSelectProps = PropsWithChildren & {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export const LabeledSelect = ({
  label,
  value,
  onChange,
  children,
}: LabeledSelectProps) => {
  const { colors } = useColors();
  return (
    <div className="flex flex-col">
      <select
        className="py-1 rounded-md w-52 bg-transparent text-xs px-2"
        style={{ border: `1px solid ${colors.themed600}` }}
        value={value}
        onChange={(x) => onChange(x.target.value)}
      >
        {children}
      </select>
    </div>
  );
};

export type PrimaryButtonProps = PropsWithChildren & {
  onClick: () => void;
};

export const PrimaryButton = ({ children, onClick }: PrimaryButtonProps) => {
  const { colors } = useColors();
  return (
    <button
      className="rounded-md text-white px-4 py-2 text-sm"
      style={{
        background: colors.themed600,
        border: `1px solid ${colors.themed600}`,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

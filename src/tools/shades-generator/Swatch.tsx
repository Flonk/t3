import chroma from "chroma-js";

type SwatchProps = {
  color: string | number | chroma.Color;
};

export const Swatch = ({ color }: SwatchProps) => {
  return (
    <div className="flex m-px grow">
      <div
        className="rounded-md w-14 h-14 grow"
        style={{
          backgroundColor: chroma(color).hex(),
          cursor: "pointer",
        }}
        onClick={() => navigator.clipboard.writeText(chroma(color).hex())}
      />
    </div>
  );
};

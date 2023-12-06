import { FC } from "react";
import { UseColorSchemeGenerator } from "./useColorSchemeGenerator";
import chroma from "chroma-js";
import { Swatch } from "./Swatch";
import { Card } from "../../ui/Card";

type SwatchListProps = {
  generator: UseColorSchemeGenerator;
};
export const SwatchList: FC<SwatchListProps> = ({ generator }) => (
  <Card className="flex" inlineStyle={{ background: "white" }}>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
      <Swatch
        color={chroma.oklch(
          generator.lightnessFn(x),
          generator.chromaFn(x),
          generator.hueFn(x)
        )}
        key={x}
      />
    ))}
  </Card>
);

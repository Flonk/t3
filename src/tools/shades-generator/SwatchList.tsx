import chroma from "chroma-js";
import { FC } from "react";
import { Card } from "./Card";
import { Swatch } from "./Swatch";
import { UseColorSchemeGenerator } from "./useColorSchemeGenerator";

type SwatchListProps = {
  generator: UseColorSchemeGenerator;
};
export const SwatchList: FC<SwatchListProps> = ({ generator }) => (
  <Card className="flex flex-wrap m-2">
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

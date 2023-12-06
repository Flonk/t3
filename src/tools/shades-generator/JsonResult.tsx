import chroma from "chroma-js";
import { FC } from "react";
import { UseColorSchemeGenerator } from "./useColorSchemeGenerator";
import { Card } from "../../ui/Card";

const COLOR_WEIGHTS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

type JsonResultProps = {
  generator: UseColorSchemeGenerator;
};

export const JsonResult: FC<JsonResultProps> = ({ generator }) => {
  const colorName = generator.baseColorName.toLocaleLowerCase();
  return (
    <Card className="w-72 text-left">
      <h3
        className="text-md font-bold text-left"
        style={{
          color: generator.generateHex(7),
        }}
      >
        JSON result
      </h3>
      <div
        className="bg-gray-100 p-4 text-xs font-mono whitespace-pre rounded-md overflow-y-scroll"
        style={{
          background: generator.generateHex(10),
          color: generator.generateHex(1),
          boxShadow: `inset 0 0 0.5rem 0 black`,
        }}
      >
        <span>{"{\n"}</span>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => {
          const str = `  "${colorName}-${
            COLOR_WEIGHTS[x]
          }": "${generator.generateHex(x)}",\n`;

          return str;
        })}
        <span>{"}"}</span>
      </div>
    </Card>
  );
};

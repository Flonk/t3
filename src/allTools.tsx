import { JsonPrettifier } from "./tools/json-prettifier/JsonPrettifier";
import { Metronome } from "./tools/metronome/Metronome";
import { ShadesGenerator } from "./tools/shades-generator/ShadesGenerator";

export const BASE_URL = "/t3";

export const ALL_TOOLS = [
  {
    title: "JSON Prettifier",
    path: BASE_URL + "/tools/json-prettifier",
    element: <JsonPrettifier />,
  },
  {
    title: "Tailwind Shades Generator",
    path: BASE_URL + "/tools/shades-generator",
    element: <ShadesGenerator />,
  },
  {
    title: "Metronome",
    path: BASE_URL + "/tools/metronome",
    element: <Metronome />,
  },
].sort((a, b) => a.title.localeCompare(b.title));

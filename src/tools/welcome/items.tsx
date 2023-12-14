export type PageNavToolItem = {
  title: string;
  to: string;
};

export const BASE_URL = "/t3";

export const toolItems: PageNavToolItem[] = [
  {
    title: "JSON Prettifier",
    to: BASE_URL + "/tools/json-prettifier",
  },
  {
    title: "Tailwind Shades Generator",
    to: BASE_URL + "/tools/shades-generator",
  },
];

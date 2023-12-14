export type PageNavToolItem = {
  title: string;
  to: string;
};

export type PageNavBlogItem = {
  title: string;
  date: string;
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

export const blogItems: PageNavBlogItem[] = [
  {
    title: "Hello World",
    to: BASE_URL + "/blog/1-hello-world",
    date: "2023-12-14",
  },
];

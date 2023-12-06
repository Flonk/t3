export type PageNavToolItem = {
  title: string;
  to: string;
};

export type PageNavBlogItem = {
  title: string;
  date: string;
  to: string;
};

export const toolItems: PageNavToolItem[] = [
  {
    title: "JSON Prettifier",
    to: "/tools/json-prettifier",
  },
  {
    title: "Tailwind Shades Generator",
    to: "/tools/shades-generator",
  },
];

export const blogItems: PageNavBlogItem[] = [
  {
    title: "The married men of Nottingham",
    to: "/blog/1-the-married-men-of-nottingham",
    date: "2023-12-06",
  },
];

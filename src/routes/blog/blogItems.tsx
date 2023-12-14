import { BASE_URL } from "../../tools/welcome/items";

type BlogPostMetadata = {
  title: string;
  date: string;
  to: string;
};

export const blogItems: Record<number, BlogPostMetadata> = {
  1: {
    title: "Hello World",
    to: BASE_URL + "/blog/1-hello-world",
    date: "2023-12-14",
  },
};

export const getBlogPostMetadata = (id: number) => {
  return blogItems[id];
};

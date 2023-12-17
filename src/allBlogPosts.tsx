import { BASE_URL } from "./allTools";

type BlogPostMetadata = {
  title: string;
  date: string;
  to: string;
};

export const ALL_BLOG_POSTS: Record<number, BlogPostMetadata> = {
  1: {
    title: "Hello World",
    to: BASE_URL + "/blog/1-hello-world",
    date: "2023-12-14",
  },
  2: {
    title: "Design Document",
    to: BASE_URL + "/blog/2-design-document",
    date: "2023-12-17",
  },
};

export const getBlogPostMetadata = (id: number) => {
  return ALL_BLOG_POSTS[id];
};

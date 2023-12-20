import { useParams } from "react-router-dom";
import { getBlogPostMetadata } from "../../allBlogPosts";
import { Page } from "../../ui/Page";
import { BlogPost_1_HelloWorld } from "./articles/1-hello-world";
import { BlogPost_2_DesignDocument } from "./articles/2-design-document";

const getBlogPost = (id: number) => {
  switch (id) {
    case 2:
      return BlogPost_2_DesignDocument();
    case 1:
    default:
      return BlogPost_1_HelloWorld();
  }
};

export const Blog = () => {
  const data = useParams();
  const id = Number(data.slug?.split("-").shift() ?? "1");
  const metaData = getBlogPostMetadata(id);

  return <Page title={metaData.title}>{getBlogPost(id)}</Page>;
};

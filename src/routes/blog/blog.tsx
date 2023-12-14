import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlogPost_1_HelloWorld } from "./articles/1-hello-world";
import { getBlogPostMetadata } from "./blogItems";

const getBlogPost = (id: number) => {
  switch (id) {
    case 1:
    default:
      return BlogPost_1_HelloWorld();
      break;
  }
};

export const Blog = () => {
  const data = useParams();
  const id = Number(data.slug?.split("-").shift() ?? "1");
  const metaData = getBlogPostMetadata(id);

  useEffect(() => {
    document.title = `T3 - ${metaData.title}`;
  }, [metaData.title]);

  return <div className="w-[65ch]">{getBlogPost(id)}</div>;
};

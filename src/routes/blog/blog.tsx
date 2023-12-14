import { useParams } from "react-router-dom";
import { BlogPost_1_HelloWorld } from "./articles/1-hello-world";

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

  return <div className="w-[65ch]">{getBlogPost(id)}</div>;
};

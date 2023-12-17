import { getBlogPostMetadata } from "../../../allBlogPosts";
import { Body1, Caption, H1 } from "../../../ui/Typography";

export const BlogPost_1_HelloWorld = () => {
  const data = getBlogPostMetadata(1);
  return (
    <>
      <div className="max-w-prose w-full">
        <H1 className="mb-0">{data.title}</H1>
        <Caption className="mb-8">{data.date}</Caption>
        <Body1>
          This thing is live! Good day and welcome to all of you. Here, have
          some blind text!
        </Body1>
        <Body1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Body1>
      </div>
    </>
  );
};

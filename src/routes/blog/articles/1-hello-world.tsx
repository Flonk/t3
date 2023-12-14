import { getBlogPostMetadata } from "../blogItems";

export const BlogPost_1_HelloWorld = () => {
  const data = getBlogPostMetadata(1);
  return (
    <>
      <div className="max-w-prose w-full">
        <h1 className="text-3xl font-bold mt-8">{data.title}</h1>
        <p className="text-xs text-gray-500">{data.date}</p>
        <p className="mt-4">
          This thing is live! Good day and welcome to all of you. Here, have
          some blind text!
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
};

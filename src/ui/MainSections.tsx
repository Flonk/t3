import { Link } from "react-router-dom";
import { ALL_BLOG_POSTS } from "../allBlogPosts";
import { ALL_TOOLS, BASE_URL } from "../allTools";
import { H6, InternalLink } from "./Typography";

export const PageHeader = () => {
  return (
    <Link
      to={BASE_URL}
      className="text-gray-100 bg-black fixed z-10 w-screen h-10 box-border hover:text-lime-200 flex justify-center"
    >
      <div className="flex items-center justify-between shadow-lg max-w-screen-huge w-full">
        <div className="px-4 py-2 font-mono">t3 interblag real-estate</div>
      </div>
    </Link>
  );
};

type NavSectionProps = {
  title: string;
  children: React.ReactNode;
};

const NavSection = ({ title, children }: NavSectionProps) => {
  return (
    <section className="mb-8">
      <H6
        as="header"
        className="font-bold upper border-b border-gray-300 pb-1 mb-1"
      >
        {title}
      </H6>
      <ul className="text-white">{children}</ul>
    </section>
  );
};

export const PageSidebar = () => {
  return (
    <nav className="bg-gray-50 border-r border-gray-200 px-4 py-4 w-56 text-sm shadow-inner">
      <NavSection title="Tools 🔨">
        <ul className="text-white">
          {ALL_TOOLS.map((item, index) => (
            <li key={index}>
              <InternalLink to={item.path}>
                <div className="py-1">{item.title}</div>
              </InternalLink>
            </li>
          ))}
        </ul>
      </NavSection>
      <NavSection title="Blog 🖊️">
        <ul className="text-white">
          {Object.values(ALL_BLOG_POSTS).map((item) => (
            <li className="flex flex-col" key={item.title}>
              <InternalLink
                to={item.to}
                className="text-black hover:text-gray-700"
                title={item.title}
              >
                <div className="py-1">
                  <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {item.title}
                  </div>
                  <div className="text-gray-500 text-xs">{item.date}</div>
                </div>
              </InternalLink>
            </li>
          ))}
        </ul>
      </NavSection>
    </nav>
  );
};

export const PageContentList = () => {
  return (
    <>
      <div className="h-px bg-gray-200 w-full my-8 mx-12 lg:hidden"></div>
      <div className="w-full lg:hidden">
        <div className="text-black font-bold text-sm mb-1">Tools 🔨</div>
        <ul className="">
          {ALL_TOOLS.map((item, index) => (
            <li>
              <InternalLink
                to={item.path}
                key={index}
                className="text-black hover:text-gray-600"
              >
                <div className="py-1">{item.title}</div>
              </InternalLink>
            </li>
          ))}
        </ul>
        <div className="text-black font-bold text-sm mt-8 mb-1">Blog 🖊️</div>
        <ul className="">
          {Object.values(ALL_BLOG_POSTS).map((item) => (
            <li>
              <InternalLink
                to={item.to}
                key={item.title}
                className="text-black hover:text-gray-600"
              >
                <div className="py-1">
                  <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {item.title}
                  </div>
                  <div className="text-gray-500 text-xs">{item.date}</div>
                </div>
              </InternalLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const PageFooter = () => {
  return (
    <div className="px-4 py-2 w-full flex justify-center text-xs">
      Made with &lt;3 by Florian Schindler
    </div>
  );
};

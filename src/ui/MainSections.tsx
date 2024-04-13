import { Link } from "react-router-dom";
import { ALL_TOOLS, BASE_URL } from "../allTools";
import { Inset } from "./Inset";
import { H6, InternalLink } from "./Typography";

export const PageHeader = () => {
  return (
    <Link
      to={BASE_URL}
      className="text-gray-100 bg-black fixed z-10 w-screen h-10 box-border hover:text-pizza-200 flex justify-center"
    >
      <div className="flex items-center justify-between shadow-lg max-w-screen-huge w-full">
        <div className="px-4 py-2 font-mono">t3 interblag real-estate</div>
      </div>
    </Link>
  );
};

export const PageSidebar = () => {
  return (
    <nav className="px-4 w-56 text-sm hidden shrink-0 lg:block py-4 border-r bg-gray-0 shadow-inner">
      <Inset>
        <H6 as="header" className="font-bold upper">
          Tools 🔨
        </H6>
        <ul className="text-white">
          {ALL_TOOLS.map((item, index) => (
            <li key={index}>
              <InternalLink to={item.path}>
                <div className="py-1">{item.title}</div>
              </InternalLink>
            </li>
          ))}
        </ul>
      </Inset>
    </nav>
  );
};

export const PageContentList = () => {
  return (
    <>
      <div className="w-full lg:hidden">
        <div className="text-black font-bold text-sm mb-1">Tools 🔨</div>
        <ul>
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
      </div>
    </>
  );
};

export const PageFooter = () => {
  return (
    <div className="px-4 py-2 mt-4 w-full flex justify-center text-xs">
      Made with &lt;3 by Florian Schindler
    </div>
  );
};

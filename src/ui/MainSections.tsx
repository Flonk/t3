import { Link } from "react-router-dom";
import { blogItems } from "../routes/blog/blogItems";
import { BASE_URL, toolItems } from "../tools/welcome/items";

export const PageHeader = () => {
  return (
    <Link
      to={BASE_URL}
      className="text-gray-100 bg-black fixed z-10 w-screen h-10 box-border"
    >
      <div className="flex items-center justify-between shadow-lg">
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
      <header className="font-bold upper text-gray-500">{title}</header>
      <ul className="text-white">{children}</ul>
    </section>
  );
};

export const PageSidebar = () => {
  return (
    <nav className="bg-gray-100 border-r border-gray-200 px-4 py-4 w-56 text-sm">
      <NavSection title="Tools 🔨">
        <ul className="text-white">
          {toolItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to}>
                <div className="py-1">{item.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </NavSection>
      <NavSection title="Blog 🖊️">
        <ul className="text-white">
          {Object.values(blogItems).map((item) => (
            <li className="flex flex-col" key={item.title}>
              <Link
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
              </Link>
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
          {toolItems.map((item, index) => (
            <li>
              <Link
                to={item.to}
                key={index}
                className="text-black hover:text-gray-600"
              >
                <div className="py-1">{item.title}</div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-black font-bold text-sm mt-8 mb-1">Blog 🖊️</div>
        <ul className="">
          {Object.values(blogItems).map((item) => (
            <li>
              <Link
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
              </Link>
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

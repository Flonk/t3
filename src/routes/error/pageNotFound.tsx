import chroma from "chroma-js";
import { useEffect } from "react";
import { BASE_URL } from "../../allTools";
import { ColorsProvider } from "../../ui/ColorsProvider";

const Header = () => {
  return (
    <a href={BASE_URL} className="text-white">
      <div className="flex items-center justify-between bg-black text-white shadow-lg">
        <div className="px-4 py-1 font-mono">t3 interblag real-estate</div>
      </div>
    </a>
  );
};

const AppContent = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col"
      style={{ background: "#FAFAFA" }}
    >
      <Header />
      <div className="grow flex items-center justify-center">
        <h1>404</h1>
        <p>Page not found.</p>
      </div>
    </div>
  );
};

export const PageNotFound = () => {
  useEffect(() => {
    window.chroma = chroma;
  }, []);

  return (
    <ColorsProvider>
      <AppContent />
    </ColorsProvider>
  );
};

export default PageNotFound;

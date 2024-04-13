import chroma from "chroma-js";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ColorsProvider } from "../../ui/ColorsProvider";
import { PageFooter, PageHeader, PageSidebar } from "../../ui/MainSections";
import "./root.css";

const AppContent = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-gray-200">
      <PageHeader />
      <div className="mt-10 z-0 max-w-screen-xl w-full bg-white shadow-lg flex">
        <PageSidebar />
        <div className="grow">
          <div className="min-h-screen">
            <Outlet />
          </div>
          <PageFooter />
        </div>
      </div>
    </div>
  );
};

export const Root = () => {
  useEffect(() => {
    window.chroma = chroma;
  }, []);

  return (
    <ColorsProvider>
      <AppContent />
    </ColorsProvider>
  );
};

export default Root;

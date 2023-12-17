import chroma from "chroma-js";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ColorsProvider } from "../../ui/ColorsProvider";
import { PageFooter, PageHeader, PageSidebar } from "../../ui/MainSections";
import "./root.css";

const AppContent = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-gray-100">
      <PageHeader />
      <div className="w-full flex justify-center">
        <div className="mt-10 z-0 max-w-screen-huge w-full bg-white border-x border-gray-300 shadow-lg">
          <div className="flex">
            <div className="grow-0 hidden lg:flex">
              <PageSidebar />
            </div>
            <div className="grow flex flex-col items-center min-h-screen">
              <div className="mb-16 min-h-screen flex w-full justify-center">
                <Outlet />
              </div>
              <PageFooter />
            </div>
          </div>
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

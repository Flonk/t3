import chroma from "chroma-js";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ColorsProvider } from "../../ui/ColorsProvider";
import { PageFooter, PageHeader, PageSidebar } from "../../ui/MainSections";
import "./root.css";

const AppContent = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-white">
      <PageHeader />
      <div className="mt-10 z-0">
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

import chroma from "chroma-js";
import { useEffect } from "react";
import "./App.css";
import { ShadesGenerator } from "./tools/generator/ShadesGenerator";
import { ColorsProvider, useColors } from "./ui/ColorsProvider";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-black text-white">
      <div className="flex items-center border-black border-b">
        <div className="font-bold text-black bg-white h-12 w-12 flex items-center justify-center">
          <div>t3</div>
        </div>
        <div className="tracking-wider p-2">t3 Interblag Real-Estate</div>
      </div>
    </div>
  );
};

const AppContent = () => {
  const { colors } = useColors();

  return (
    <div
      className="w-screen h-screen flex flex-col"
      style={{ background: "#FAFAFA" }}
    >
      <Header />
      <div className="grow flex items-center justify-center">
        <ShadesGenerator />
      </div>
    </div>
  );
};

export const App = () => {
  useEffect(() => {
    window.chroma = chroma;
  }, []);

  return (
    <ColorsProvider>
      <AppContent />
    </ColorsProvider>
  );
};

export default App;

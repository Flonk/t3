/* eslint-disable react-refresh/only-export-components */
import React, {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

const defaultColors = {
  themed50: "rgb(233, 251, 255)",
  themed100: "rgb(220, 250, 255)",
  themed200: "rgb(199, 241, 246)",
  themed300: "rgb(172, 224, 228)",
  themed400: "rgb(141, 202, 206)",
  themed500: "rgb(107, 176, 182)",
  themed600: "rgb(72, 149, 158)",
  themed700: "rgb(35, 123, 137)",
  themed800: "rgb(0, 98, 120)",
  themed900: "rgb(0, 76, 106)",
  themed950: "rgb(4, 41, 65)",
};
export type ThemedColors = typeof defaultColors;

const defaultColorContext = {
  colors: defaultColors,
  setColors: (() => {
    /**/
  }) as React.Dispatch<React.SetStateAction<ThemedColors>>,
};

const ColorsContext = createContext(defaultColorContext);

type ColorsProviderProps = PropsWithChildren;
export const ColorsProvider: FC<ColorsProviderProps> = ({ children }) => {
  const [colors, setColors] = useState(defaultColors);

  return (
    <ColorsContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorsContext.Provider>
  );
};

export const useColors = () => useContext(ColorsContext);

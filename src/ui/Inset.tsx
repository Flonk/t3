import { PropsWithChildren } from "react";
import { Styleable } from "./Styleable";

type InsetProps = Styleable & PropsWithChildren;

export const Inset = ({ children, className }: InsetProps) => (
  <div
    className={`border border-gray-200 p-4 shadow-inner rounded-sm ${className}`}
  >
    {children}
  </div>
);

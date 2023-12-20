import { PropsWithChildren, useEffect } from "react";
import { Styleable } from "./Styleable";

export type PageProps = Styleable &
  PropsWithChildren & {
    title: string;
  };

export const Page = ({ title, className, children }: PageProps) => {
  useEffect(() => {
    document.title = `${title} - T3`;
  }, [title]);

  return (
    <div className={`mx-auto px-8 flex flex-col items-center ${className}`}>
      {children}
    </div>
  );
};

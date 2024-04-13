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
    <div
      className={`px-8 py-6 flex flex-col items-center mx-auto lg:mx-0 ${className}`}
    >
      {children}
    </div>
  );
};

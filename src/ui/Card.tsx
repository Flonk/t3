import { PropsWithChildren } from "react";
import { Styleable } from "./Styleable";

type CardProps = Styleable &
  PropsWithChildren & {
    inlineStyle?: React.CSSProperties;
  };

export const Card = ({ children, className, inlineStyle }: CardProps) => {
  return (
    <div
      className={`rounded-md overflow-hidden p-5 m-2 relative shadow-lg ${
        className ?? ""
      }`}
      style={{
        border: `1px solid #DDD`,
        background: "white",
        ...inlineStyle,
      }}
    >
      {children}
    </div>
  );
};

import { PropsWithChildren } from "react";
import { Styleable } from "./Styleable";
import { useColors } from "./ColorsProvider";

type CardProps = Styleable &
  PropsWithChildren & {
    inlineStyle?: React.CSSProperties;
  };

export const Card = ({ children, className, inlineStyle }: CardProps) => {
  const { colors } = useColors();
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

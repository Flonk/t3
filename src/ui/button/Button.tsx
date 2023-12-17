import { PropsWithChildren } from "react";
import { Styleable } from "../Styleable";
import { TYPOGRAPHY_STYLES } from "../Typography";
import { TRANSITION_BORDER } from "../transitions";

type BaseButtonProps = Styleable &
  PropsWithChildren & {
    onClick: () => void;
  };

const BASE_BUTTON_STYLE = `rounded-sm py-3 px-5
  bg-lime-200 text-lime-800
  border border-lime-200 hover:border-lime-800
  ${TRANSITION_BORDER}
  active:bg-lime-800 active:text-lime-200`;

export const BaseButton = ({
  children,
  onClick,
  className,
}: BaseButtonProps) => {
  return (
    <button className={`${BASE_BUTTON_STYLE} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

type ButtonProps = Styleable & {
  onClick: () => void;
  title: string;
};

export const Button = ({ onClick, title, className }: ButtonProps) => {
  return (
    <BaseButton
      onClick={onClick}
      className={`flex justify-center ${className}`}
    >
      <span className={TYPOGRAPHY_STYLES.button}>{title}</span>
    </BaseButton>
  );
};

import { PropsWithChildren } from "react";
import { Styleable } from "../Styleable";
import { TYPOGRAPHY_STYLES } from "../Typography";
import { TRANSITION_BORDER } from "../transitions";

type BaseButtonProps = Styleable &
  PropsWithChildren & {
    onClick: () => void;
  };

const BASE_BUTTON_STYLE = `flex justify-center items-center rounded-sm
  border border-pizza-200 hover:border-pizza-800
  ${TRANSITION_BORDER}
  `;

const BASE_BUTTON_MD_STYLE = `${BASE_BUTTON_STYLE} py-3 px-5 bg-pizza-200 text-pizza-800
  active:bg-pizza-800 active:text-pizza-200
  `;
const BASE_BUTTON_SM_STYLE = `${BASE_BUTTON_STYLE} py-1 px-2 bg-transparent border-pizza-600`;

export const BaseButton = ({
  children,
  onClick,
  className,
}: BaseButtonProps) => {
  return (
    <button
      className={`${BASE_BUTTON_MD_STYLE} ${className}`}
      onClick={onClick}
    >
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
    <BaseButton onClick={onClick} className={className}>
      <span className={TYPOGRAPHY_STYLES.button}>{title}</span>
    </BaseButton>
  );
};

export const BaseButtonSmall = ({
  children,
  onClick,
  className,
}: BaseButtonProps) => {
  return (
    <button
      className={`${BASE_BUTTON_SM_STYLE} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const ButtonSmall = ({ onClick, title, className }: ButtonProps) => {
  return (
    <BaseButtonSmall onClick={onClick} className={className}>
      <span className={TYPOGRAPHY_STYLES.button}>{title}</span>
    </BaseButtonSmall>
  );
};

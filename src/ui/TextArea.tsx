import { PropsWithChildren } from "react";
import { Styleable } from "./Styleable";
import { TRANSITION_SM } from "./transitions";

type TextAreaForwardedProps = Partial<{
  id: string;
  name: string;
  wrap: string;
}>;

type TextAreaProps = Styleable &
  PropsWithChildren &
  TextAreaForwardedProps & {
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  };

export const TextArea = ({
  placeholder,
  id,
  name,
  wrap,
  className,
  onChange,
  children,
}: TextAreaProps) => {
  return (
    <textarea
      className={`w-full bg-transparent rounded-sm p-1 text-xs shadow-inner border border-gray-300 hover:border-lime-800 ${TRANSITION_SM} ${className}`}
      placeholder={placeholder}
      name={name}
      id={id}
      onChange={onChange}
      wrap={wrap}
    >
      {children}
    </textarea>
  );
};

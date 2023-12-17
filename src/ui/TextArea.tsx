import { Styleable } from "./Styleable";
import { TRANSITION_SM } from "./transitions";

type TextAreaForwardedProps = Partial<{
  id: string;
  name: string;
}>;

type TextAreaProps = Styleable &
  TextAreaForwardedProps & {
    placeholder: string;
  };

export const TextArea = ({ placeholder, id, name }: TextAreaProps) => {
  return (
    <textarea
      className={`w-full h-full bg-transparent rounded-sm p-1 text-xs border border-lime-600 hover:border-lime-900 ${TRANSITION_SM}`}
      placeholder={placeholder}
      name={name}
      id={id}
    />
  );
};

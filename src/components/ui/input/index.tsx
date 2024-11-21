import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type DefaultInput = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Props = {
  name: string;
  label?: string;
  containerClassName?: string;
} & DefaultInput;

export default function Input({
  name,
  className,
  label,
  containerClassName,
  ...props
}: Props) {
  const inputClass = `_input ${className ? ` ${className}` : ""}`;

  const divClassName = `space-y-1 ${
    containerClassName ? ` ${containerClassName}` : ""
  }`;

  return (
    <div className={divClassName}>
      {label && (
        <label
          htmlFor={props.id}
          className="text-xs font-semibold text-[#c7c7c7]"
        >
          {label}
        </label>
      )}
      <input className={inputClass} {...props} />
    </div>
  );
}

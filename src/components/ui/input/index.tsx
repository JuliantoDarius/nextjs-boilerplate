import {
  InputProps,
  Input as MantineInput,
  PolymorphicComponentProps,
} from "@mantine/core";

type Props = {
  name: string;
  label?: string;
  labelOnRight?: boolean;
  containerClassName?: string;
} & PolymorphicComponentProps<"input", InputProps>;

export default function Input({
  name,
  className,
  label,
  labelOnRight,
  containerClassName,
  ...props
}: Props) {
  let inputClass = `_input ${className ? ` ${className}` : ""}`;
  inputClass += props.leftSection ? "pl-8" : "";
  const labelClass = `_input-label ${labelOnRight ? "text-right" : ""}`;
  const divClassName = `${containerClassName ? ` ${containerClassName}` : ""}`;

  return (
    <div className={divClassName}>
      {label && (
        <label htmlFor={props.id} className={labelClass}>
          {label}
        </label>
      )}
      <MantineInput
        classNames={{ input: inputClass }}
        {...props}
        error={undefined}
      />
      {/* <input className={inputClass} {...props} /> */}
    </div>
  );
}

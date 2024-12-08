import { motion as m } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useClickOutside, useDebouncedState } from "@mantine/hooks";
import { AnimatePresence } from "framer-motion";
import { dropdownContainerAnimation } from "@components/layouts/_components/sidebar/_utils/dropdownAnimation";

const InputSearch = dynamic(() => import("../search"));
const DefaultLoading = dynamic(() => import("@components/ui/loading"));
const Input = dynamic(() => import(".."));

type Props = {
  options: any[];
  optionName: string;
  optionValue: string;
  value: any;
  onChange: (value: any) => void;
  onBlur?: () => void;
  handleSearch?: (search: string) => void;
  isLoading?: boolean;
  clearable?: boolean;
  searchPlaceholder?: string;
  name: string;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  className?: string;
};

export default function InputSelect({
  value,
  optionName,
  optionValue,
  options,
  onBlur,
  onChange,
  handleSearch,
  isLoading,
  clearable,
  searchPlaceholder,
  name,
  className,
  ...props
}: Props) {
  const [optValue, setOptValue] = useState("");
  useEffect(() => {
    if (value == null) {
      return setOptValue("");
    }
    options.map((opt: any) => {
      if (opt[optionValue] === value) setOptValue(opt[optionName]);
    });
  }, [options, value, optionValue, optionName]);
  const [showOptions, setShowOptions] = useState(false);
  const clickOutsideRef = useClickOutside(() => setShowOptions(false));
  const [query, setQuery] = useDebouncedState("", 500);

  return (
    <div className="_input-select-container" ref={clickOutsideRef}>
      <Input
        name={name}
        type="text"
        label={props.label}
        className={`_input cursor-pointer relative border-none ${
          className ?? ""
        }`}
        placeholder={props.placeholder}
        value={optValue}
        readOnly
        onClick={() => {
          if (props.readOnly || props.disabled) return;
          setShowOptions((prev) => !prev);
          onBlur?.();
        }}
      />
      {clearable && !props.readOnly && !props.disabled && (
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer"
          onClick={() => {
            setOptValue("");
            onChange(null);
          }}
        >
          <IoMdClose color="black" size={18} />
        </button>
      )}
      <AnimatePresence>
        {showOptions && (
          <m.div
            variants={dropdownContainerAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="_input-select-container hide-scrollbar"
            data-dropdown-open={showOptions}
          >
            {handleSearch && (
              <div className="_input-select-search">
                <InputSearch
                  query={query}
                  setQuery={(search) => {
                    handleSearch(search);
                    setQuery(search);
                  }}
                />
              </div>
            )}
            {isLoading ? (
              <DefaultLoading />
            ) : options.length === 0 ? (
              <p className={`text-center ${handleSearch ? "pt-0" : "pt-2"}`}>
                Data tidak ditemukan
              </p>
            ) : (
              <div
                className={`px-3 ${
                  handleSearch ? "pt-0" : "pt-4"
                } flex flex-col gap-y-2`}
              >
                {options.map((opt: any, i) => {
                  return (
                    <button
                      key={`${opt[optionName]}-${i}`}
                      type="button"
                      className="_dropdown-item"
                      data-active={value === opt[optionValue]}
                      onClick={() => {
                        setShowOptions(false);
                        onChange(opt[optionValue]);
                      }}
                    >
                      {opt[optionName]}
                    </button>
                  );
                })}
              </div>
            )}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

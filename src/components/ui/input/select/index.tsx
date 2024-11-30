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
    <div className="relative w-full" ref={clickOutsideRef}>
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
            className={`absolute z-10 max-h-48 overflow-x-hidden hide-scrollbar overflow-y-auto w-full pt-2 pb-2 rounded-b-lg top-12 left-0 text-input-color-text bg-input-background flex flex-col gap-y-2 ${
              showOptions ? "" : "pointer-events-none z-0"
            }`}
          >
            {handleSearch && (
              <div className="w-full sticky top-0 px-3 pt-2 bg-white">
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
                      className={`w-full ${
                        value === opt[optionValue]
                          ? "bg-primary text-white"
                          : ""
                      } text-left hover:bg-primary hover:text-white rounded px-2 py-1.5 transition-colors duration-300 text-sm font-semibold`}
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

import { SetStateType } from "@/utils/types/set-state.type";

interface Props {
  isOpen: boolean;
  setIsOpen: SetStateType<boolean>;
  className?: string;
}

export default function HamburgerIcon({ isOpen, setIsOpen, className }: Props) {
  let btnClass =
    "bg-foreground flex flex-col gap-y-2 items-center justify-center px-3 py-4 rounded-md";
  btnClass += className ? " " + className : "";

  return (
    <button
      type="button"
      className={btnClass}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span
        className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
          isOpen ? "-rotate-45 translate-y-[0.32rem]" : ""
        }`}
      ></span>
      <span
        className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
          isOpen ? "rotate-45 -translate-y-[0.32rem]" : ""
        }`}
      ></span>
    </button>
  );
}

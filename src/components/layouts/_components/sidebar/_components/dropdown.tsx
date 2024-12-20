import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { useRouter } from "next/router";
import { handleSidebarItemClass } from "../_utils/handleSidebarItemClass";
import {
  dropdownContainerAnimation,
  dropdownItemAnimation,
} from "../_utils/dropdownAnimation";
import { DropdownItem } from "@utils/types/menu.type";

type Props = {
  children: ReactNode;
  dropdownItems: DropdownItem[];
  activeUrl: string;
  id: string;
};

export default function SidebarDropdown({
  children,
  dropdownItems,
  activeUrl,
  id,
}: Props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const path = router.asPath;
    const pathId = path.split("#")[1];
    if (id !== pathId) {
      setIsOpen(false);
      setTimeout(() => {
        setIsDropdownOpen(false);
      }, 600);
    }
  }, [id, router]);

  return (
    <div
      onClick={() => {
        setIsOpen((prev) => !prev);
        router.replace(`#${id}`, undefined, { shallow: true });
      }}
      className={`${handleSidebarItemClass(
        router,
        activeUrl,
        true
      )} relative rounded-xl cursor-pointer ${
        isDropdownOpen || isOpen ? "bg--primary rounded-b-none" : ""
      }`}
    >
      {children}

      <AnimatePresence onExitComplete={() => setIsDropdownOpen(false)}>
        {isOpen && (
          <m.div
            onAnimationComplete={() => setIsDropdownOpen(true)}
            variants={dropdownContainerAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="_dropdown-container hide-scrollbar"
          >
            {dropdownItems.map((item, i) => {
              if (item.routeTo) {
                return (
                  <m.a
                    key={`dropdown-item-${i}`}
                    variants={dropdownItemAnimation}
                    className="_dropdown-item"
                    href={item.routeTo}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.children}
                  </m.a>
                );
              }

              return (
                <m.button
                  key={`dropdown-item-${i}`}
                  type="button"
                  variants={dropdownItemAnimation}
                  className="_dropdown-item"
                  onClick={(e) => {
                    e.stopPropagation();
                    item?.onClick?.();
                  }}
                >
                  {item.children}
                </m.button>
              );
            })}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { ReactNode, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { useRouter } from "next/router";
import { handleSidebarItemClass } from "../_utils/handleSidebarItemClass";
import styles from "../_styles/Sidebar.module.css";
import {
  dropdownContainerAnimation,
  dropdownItemAnimation,
} from "../_utils/dropdownAnimation";

type DropdownItem = {
  routeTo?: string;
  onClick?: () => void;
  children: ReactNode;
};

interface Props {
  children: ReactNode;
  dropdownItems: DropdownItem[];
}

export default function SidebarDropdown({ children, dropdownItems }: Props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
      className={`${handleSidebarItemClass(
        router,
        "/dropdown"
      )} relative rounded-xl cursor-pointer ${
        isDropdownOpen || isOpen ? "bg-sidebar-foreground" : ""
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
            className={styles.dropdownContainer}
          >
            {dropdownItems.map((item, i) => {
              if (item.routeTo) {
                return (
                  <m.a
                    key={`dropdown-item-${i}`}
                    variants={dropdownItemAnimation}
                    className={styles.dropdownItem}
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
                  className={styles.dropdownItem}
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

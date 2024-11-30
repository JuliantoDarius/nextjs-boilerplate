import { NextRouter } from "next/router";
import styles from "../_styles/Sidebar.module.css";

export const handleSidebarItemClass = (
  router: NextRouter,
  url: string,
  includeCondition: boolean = false
) => {
  if (!includeCondition) {
    return router.pathname === url
      ? styles.sidebarItemActive
      : styles.sidebarItem;
  }
  return router.pathname.includes(url)
    ? styles.sidebarItemActive
    : styles.sidebarItem;
};

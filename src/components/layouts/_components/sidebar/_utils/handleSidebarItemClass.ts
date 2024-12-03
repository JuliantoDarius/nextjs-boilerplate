import { NextRouter } from "next/router";

export const handleSidebarItemClass = (
  router: NextRouter,
  url: string,
  includeCondition: boolean = false
) => {
  if (!includeCondition) {
    return router.pathname === url ? "_sidebar-item-active" : "_sidebar-item";
  }
  return router.pathname.includes(url)
    ? "_sidebar-item-active"
    : "_sidebar-item";
};

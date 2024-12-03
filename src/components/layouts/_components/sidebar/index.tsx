import { useSidebarContext } from "@/context/sidebar.context";
import Link from "next/link";
import { useRouter } from "next/router";
import { handleSidebarItemClass } from "./_utils/handleSidebarItemClass";
import SidebarDropdown from "./_components/dropdown";
import { menus } from "@utils/common/menus.common";

export default function Sidebar() {
  const router = useRouter();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();

  return (
    <>
      <section className="_sidebar" data-sidebar-close={isSidebarOpen}>
        <div className="py-10 space-y-20">
          <div className="flex flex-col gap-y-6 w-[80%] mx-auto">
            <h3 className="font-bold text-3xl text-center mb-10">Your Brand</h3>
            {menus.map((menu, i) => {
              if (menu.dropdownMenu == null || menu.id == null) {
                return (
                  <Link
                    key={`menu-${i}`}
                    href={menu.routeTo}
                    className={handleSidebarItemClass(
                      router,
                      menu.routeTo,
                      true
                    )}
                  >
                    {menu.icon}
                    <span>{menu.menuText}</span>
                  </Link>
                );
              }

              return (
                <SidebarDropdown
                  key={`menu-${i}`}
                  id={menu.id}
                  activeUrl={menu.routeTo}
                  dropdownItems={menu.dropdownMenu}
                >
                  {menu.icon}
                  <span>{menu.menuText}</span>
                </SidebarDropdown>
              );
            })}
          </div>
        </div>
      </section>
      <div
        className="_sidebar-cover lg:hidden"
        data-sidebar-open={isSidebarOpen}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
    </>
  );
}

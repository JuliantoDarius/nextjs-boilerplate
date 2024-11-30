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
      <section
        className={`z-50 fixed top-0 left-0 h-full min-h-[100dvh] w-72 bg-sidebar transition-transform duration-500 ease-out ${
          isSidebarOpen ? "" : "-translate-x-80"
        } text-white overflow-y-auto`}
      >
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
        className={`${
          isSidebarOpen ? "w-full" : "w-0"
        } lg:hidden h-[100dvh] fixed top-0 left-0 bg-black/80 z-[45] transition-all duration-500 ease-out`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
    </>
  );
}

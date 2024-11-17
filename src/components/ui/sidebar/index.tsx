import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { FaCubesStacked } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { useSidebarContext } from "@/context/sidebar.context";
import Link from "next/link";
import { useRouter } from "next/router";
import { handleSidebarItemClass } from "./_utils/handleSidebarItemClass";
import SidebarDropdown from "./_components/dropdown";

export default function Sidebar() {
  const router = useRouter();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();

  return (
    <>
      <section
        className={`z-50 fixed -top-10 left-0 h-full min-h-[100dvh] w-72 bg-sidebar transition-transform duration-500 ease-out ${
          isSidebarOpen ? "" : "-translate-x-80"
        } text-white overflow-y-auto`}
      >
        <div className="py-10 space-y-20">
          <div className="flex flex-col gap-y-6 w-[80%] mx-auto">
            <h3 className="font-bold text-3xl text-center mb-10">Brands</h3>
            <Link
              href="/dashboard"
              className={handleSidebarItemClass(router, "/dashboard")}
            >
              <FaHome className="text-xl" />
              <span>Dashboard</span>
            </Link>

            <Link
              href="/components"
              className={handleSidebarItemClass(router, "/components")}
            >
              <FaCubesStacked className="text-xl" />
              <span>Components</span>
            </Link>

            <SidebarDropdown
              dropdownItems={[
                { children: "menu 1", routeTo: "/" },
                { children: "menu 1", routeTo: "#" },
                { children: "menu 1", routeTo: "#" },
                { children: "menu 1", onClick: () => console.log("test") },
              ]}
            >
              <MdOutlineArrowDropDownCircle className="text-xl" />
              <span>Dropdown</span>
            </SidebarDropdown>
          </div>
        </div>
      </section>
      <div
        className={`${
          isSidebarOpen ? "w-full" : "w-0"
        } lg:hidden h-[100dvh] fixed -top-10 left-0 bg-black/80 z-[45] transition-all duration-500 ease-out`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
    </>
  );
}

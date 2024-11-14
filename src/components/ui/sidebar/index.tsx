import { useSidebarContext } from "@/context/sidebar.context";
import Link from "next/link";

export default function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();

  return (
    <>
      <section
        className={`z-50 fixed -top-10 left-0 h-full min-h-[100dvh] w-72 bg-slate-700 transition-transform duration-500 ease-out ${
          isSidebarOpen ? "" : "-translate-x-80"
        } text-white overflow-y-auto`}
      >
        <div className="py-10 px-6 space-y-20">
          <h3 className="font-bold text-3xl text-center">Brands</h3>
          <div className="flex flex-col gap-y-6 w-[80%] mx-auto">
            <Link href="#">Home</Link>
            <Link href="#">Home</Link>
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

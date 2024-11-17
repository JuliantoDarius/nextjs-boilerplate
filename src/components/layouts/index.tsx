import { useSidebarContext } from "@/context/sidebar.context";
import { ReactNode } from "react";
import Navbar from "@components/ui/navbar";
import Sidebar from "@components/ui/sidebar";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const { isSidebarOpen } = useSidebarContext();

  return (
    <>
      <Navbar />
      <main
        className={`z-30 space-y-10 px-4 mx-auto ${
          isSidebarOpen ? "pl-[19rem]" : ""
        } transition-all duration-500 ease-out py-10`}
      >
        {children}

        <Sidebar />
      </main>
    </>
  );
}

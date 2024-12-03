import { useSidebarContext } from "@/context/sidebar.context";
import { ReactNode } from "react";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import BaseModal from "@components/ui/modals";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const { isSidebarOpen } = useSidebarContext();

  return (
    <>
      <Navbar />
      <main className="_layout" data-sidebar-open={isSidebarOpen}>
        {children}

        <BaseModal />
        <Sidebar />
      </main>
    </>
  );
}

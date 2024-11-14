import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";
import { useSidebarContext } from "@/context/sidebar.context";
import { Button } from "@mantine/core";

export default function Components() {
  const { isSidebarOpen } = useSidebarContext();

  return (
    <>
      <Navbar />
      <main
        className={`z-30 space-y-10 px-4 mx-auto ${
          isSidebarOpen ? "pl-[19rem]" : ""
        } transition-all duration-500 ease-out`}
      >
        <Button type="button">test</Button>
        <Sidebar />
      </main>
    </>
  );
}

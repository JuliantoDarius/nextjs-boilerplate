import { useSidebarContext } from "@/context/sidebar.context";
import Link from "next/link";

export default function Navbar() {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();

  return (
    <nav
      className={`z-40 flex justify-between items-center bg-foreground px-4 py-2 mb-10 text-white ${
        isSidebarOpen ? "pl-[19rem]" : ""
      } transition-all duration-500 ease-out`}
    >
      <div
        className="size-14 rounded-xl bg-rose-400 cursor-pointer"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      ></div>
      <div className="flex items-center gap-x-4">
        <Link className="font-semibold hover:underline" href="/register">
          Register
        </Link>
        <Link className="font-semibold hover:underline" href="/login">
          Login
        </Link>
        <Link className="font-semibold hover:underline" href="/about">
          About
        </Link>
        <Link className="font-semibold hover:underline" href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

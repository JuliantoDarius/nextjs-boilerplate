import { useSidebarContext } from "@/context/sidebar.context";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

const HamburgerIcon = dynamic(() => import("../costum-icon/hamburger"));

export default function Navbar() {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <nav
      className={`z-40 flex justify-between items-center bg-navbar px-4 py-2 text-white ${
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

        <HamburgerIcon
          isOpen={isHamburgerOpen}
          setIsOpen={setIsHamburgerOpen}
        />
        <div
          className={`flex flex-col gap-y-4 absolute top-16 right-0 bg-foreground p-4 transition-all duration-500 z-50 rounded-lg w-52 ${
            isHamburgerOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10 pointer-events-none"
          }`}
        >
          <Link className="hover:underline" href="/dashboard">
            Dashboard
          </Link>
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="#">
            Tools
          </Link>
          <Link className="hover:underline" href="#">
            Use Cases
          </Link>
          <Link className="hover:underline" href="/plans">
            Proxy Plans
          </Link>
          <Link className="hover:underline" href="#">
            Blog
          </Link>
          <Link className="hover:underline" href="/#faqs">
            FAQs
          </Link>
          <Link className="hover:underline" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

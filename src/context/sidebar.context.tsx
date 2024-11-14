import { SetStateType } from "@/utils/types/set-state.type";
import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ISidebarContext {
  isSidebarOpen: boolean;
  setIsSidebarOpen: SetStateType<boolean>;
}

interface Props {
  children: ReactNode;
}

const SidebarContext = createContext<ISidebarContext | undefined>(undefined);

export default function SidebarProvider({ children }: Props) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsSidebarOpen(width >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const width = window.innerWidth;
    setIsSidebarOpen(width >= 1024);
  }, [router.pathname]);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebarContext = (): ISidebarContext => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

import { useSidebarContext } from "@/context/sidebar.context";
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarLeftCollapse,
} from "react-icons/tb";
import { useLogout } from "@hooks/query/auth.hooks";
import { useLoadingModal } from "@hooks/zustand/modal/useLoadingModal";
import { getCookie, removeAllCookie } from "@helpers/cookie.helper";
import { CookieName } from "@utils/common/constants.common";
import { useRouter } from "next/router";
import { Button } from "@mantine/core";

export default function Navbar() {
  const router = useRouter();
  const { setIsLoadingModal } = useLoadingModal();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();
  // const { profileData } = useProfileCookie();

  const { mutate } = useLogout({
    onSettled: () => {
      setIsLoadingModal(false);
      removeAllCookie();
      router.push("/");
    },
  });

  const handleLogout = () => {
    const refreshToken = getCookie(CookieName.refreshToken) ?? "";
    mutate(refreshToken);
    setIsLoadingModal(true);
  };

  return (
    <nav className="_navbar" data-sidebar-open={isSidebarOpen}>
      <div
        className="cursor-pointer ml-2"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        {isSidebarOpen ? (
          <TbLayoutSidebarLeftCollapse className="text-4xl" />
        ) : (
          <TbLayoutSidebarLeftExpand className="text-4xl" />
        )}
      </div>
      <div className="flex items-center gap-x-4">
        {/* <p className="flex gap-x-1 border border-solid border-primary px-4 py-2 rounded-lg items-center">
          <span>{profileData?.display_name}</span>
        </p> */}

        <Button
          type="button"
          className="_btn-danger-outline h-11"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </nav>
  );
}

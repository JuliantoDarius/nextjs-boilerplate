import { useEffect, useState } from "react";
import { useModal } from "./index.hook";
import DefaultLoading from "@components/ui/loading";

export const useLoadingModal = () => {
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const { openModal, closeModal } = useModal();

  useEffect(() => {
    if (!isLoadingModal) return closeModal();
    openModal({
      disableCloseModal: true,
      size: "auto",
      children: (
        <div className="w-52 h-40 grid place-items-center">
          <h4 className="text-2xl text-slate-300">Please wait ...</h4>
          <DefaultLoading type="dots" />
        </div>
      ),
    });
  }, [isLoadingModal, openModal, closeModal]);

  return { isLoadingModal, setIsLoadingModal };
};

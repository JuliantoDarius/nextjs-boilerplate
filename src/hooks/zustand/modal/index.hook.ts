import { MantineSize } from "@mantine/core";
import { ReactNode } from "react";
import { create } from "zustand";

type ModalData = {
  title?: string | ReactNode;
  size?: number | (string & {}) | MantineSize | undefined;
  children: ReactNode;
  onClose?: () => void;
  onConfirm?: () => void;
  withCloseButton?: boolean;
  disableCloseModal?: boolean;
};

type ModalState = {
  modalData: ModalData | null | undefined;
  openModal: (modalData: ModalData) => void;
  closeModal: () => void;
};

const useModalStore = create<ModalState>((set) => ({
  modalData: null,
  openModal: (modalData) => set({ modalData }),
  closeModal: () => set({ modalData: null }),
}));

export const useModal = () => {
  const modalData = useModalStore((state) => state.modalData);
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  return { modalData, openModal, closeModal };
};

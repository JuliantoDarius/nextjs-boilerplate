import { useModal } from "@hooks/zustand/modal/index.hook";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";

export default function BaseModal() {
  const [opened, { open, close }] = useDisclosure();
  const { modalData, closeModal } = useModal();

  useEffect(() => {
    if (modalData != null) return open();
    close();
    return () => close();
  }, [modalData, closeModal, open, close]);

  return (
    <Modal
      opened={opened}
      size={modalData?.size}
      onClose={() => {
        if (modalData?.onClose) modalData.onClose();
        closeModal();
      }}
      withCloseButton={
        !modalData?.disableCloseModal && modalData?.withCloseButton
      }
      closeOnClickOutside={!modalData?.disableCloseModal}
      closeOnEscape={!modalData?.disableCloseModal}
      title={modalData?.title}
      centered
      classNames={{
        content: "bg-foreground text-primary-text-color",
        header: "bg-foreground text-primary-text-color",
      }}
    >
      {modalData?.children}
    </Modal>
  );
}

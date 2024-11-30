import { useModal } from "@hooks/zustand/modal/index.hook";
import { Button } from "@mantine/core";

type Props = {
  title: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onClose?: () => void;
};

export default function ConfirmModalContent({
  onConfirm,
  onClose,
  title,
  confirmText,
  cancelText,
}: Props) {
  const { closeModal } = useModal();

  return (
    <section className="flex flex-col items-center justify-between gap-y-10">
      <h4 className="text-xl text-center">{title}</h4>
      <div className="flex gap-x-4 w-full">
        <Button
          type="button"
          className="_btn-primary w-full h-10"
          onClick={onConfirm}
        >
          {confirmText ?? "Ya, saya yakin"}
        </Button>
        <Button
          type="button"
          className="_btn-danger-outline w-full h-10"
          onClick={() => {
            onClose?.();
            closeModal();
          }}
        >
          {cancelText ?? "Tidak, Batalkan"}
        </Button>
      </div>
    </section>
  );
}

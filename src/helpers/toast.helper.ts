import { ReactNode } from "react";
import { Id, toast, TypeOptions } from "react-toastify";

export const toastUpdate = (
  toastId: Id,
  render: ReactNode,
  type: TypeOptions
) => {
  toast.update(toastId, {
    isLoading: false,
    autoClose: 3000,
    closeOnClick: true,
    render,
    type,
  });
};

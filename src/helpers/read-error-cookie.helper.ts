import { CookieName, initErrorResponse } from "@utils/common/constants.common";
import { getCookie } from "./cookie.helper";
import { Id, toast } from "react-toastify";
import { toastUpdate } from "./toast.helper";

export const readErrorCookieHelper = () => {
  const errorCookieValue = getCookie(CookieName.errorCodeList);
  if (errorCookieValue == null) return initErrorResponse;

  return JSON.parse(errorCookieValue);
};

export const handleResponseError = (
  err: any,
  fallbackMsg: string = "Terjadi kesalahan!",
  toastId?: Id,
  isNoNotification: boolean = false
) => {
  const errorResponse = readErrorCookieHelper();
  const generalError = err?.response?.data?.errors?.general;

  if (
    err?.response?.data?.message &&
    err?.response?.data?.message
      ?.toLowerCase?.()
      ?.includes("no route matched") &&
    toastId
  ) {
    toastUpdate(toastId, "Sedang dalam tahap development", "warning");
    return;
  }

  if (generalError == null) {
    if (isNoNotification) {
      return fallbackMsg;
    }
    if (!toastId) {
      return toast.error(fallbackMsg);
    }
    toast.update(toastId, {
      isLoading: false,
      autoClose: 3000,
      closeOnClick: true,
      type: "error",
      render: fallbackMsg,
    });
  }

  if (isNoNotification) {
    return errorResponse?.[generalError];
  }

  if (!toastId) {
    return toast.error(errorResponse?.[generalError]);
  }
  toast.update(toastId, {
    isLoading: false,
    autoClose: 3000,
    closeOnClick: true,
    type: "error",
    render: errorResponse?.[generalError] || fallbackMsg,
  });
};

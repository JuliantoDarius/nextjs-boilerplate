import { CookieName, initErrorResponse } from "@utils/common/constants.common";
import { getCookie } from "./cookie.helper";
import { Id, toast } from "react-toastify";

export const readErrorCookieHelper = () => {
  const errorCookieValue = getCookie(CookieName.errorCodeList);
  if (errorCookieValue == null) return initErrorResponse;

  return JSON.parse(errorCookieValue);
};

export const handleResponseError = (
  err: any,
  fallbackMsg: string = "Failed !",
  isNoNotification: boolean = false,
  toastId?: Id
) => {
  const errorResponse = readErrorCookieHelper();
  const generalError = err?.response?.data?.errors?.general;

  if (generalError == null) {
    if (!isNoNotification) {
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
    return fallbackMsg;
  }

  if (!isNoNotification) {
    if (!toastId) {
      return toast.error(errorResponse?.[generalError]);
    }
    toast.update(toastId, {
      isLoading: false,
      autoClose: 3000,
      closeOnClick: true,
      type: "error",
      render: errorResponse?.[generalError],
    });
  }
  return errorResponse?.[generalError];
};

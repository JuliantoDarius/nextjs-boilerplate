import Cookies from "js-cookie";
import { decryptAES, encryptAES } from "./crypto.helper";
import { CookieName } from "@utils/common/constants.common";

export const getCookie = (key: string) => {
  const value = Cookies.get(key);
  if (value != null) return decryptAES(value);
  return null;
};

export const setCookie = (
  key: string,
  value: string,
  isAccessTokenExp: boolean = false,
  options?: Cookies.CookieAttributes
) => {
  const rememberMe = getCookie(CookieName.rememberMe);
  const encrypted = encryptAES(value);
  Cookies.set(key, encrypted, {
    expires: isAccessTokenExp ? (rememberMe == "true" ? 14 : 7) : undefined,
    ...options,
  });
};

export const removeCookie = (
  key: string,
  options?: Cookies.CookieAttributes
) => {
  Cookies.remove(key, options);
};

import { getCookie, removeCookie, setCookie } from "@/helpers/cookie.helper";
// import { logoutService } from "@/service/auth.service";
import { API_ROUTES } from "@/utils/common/api-route.common";
import { API_BASE_URL, CookieName } from "@/utils/common/constants.common";
import axios, { InternalAxiosRequestConfig } from "axios";

export const authAxios = axios.create({
  baseURL: API_BASE_URL,
  timeout: 120000,
  timeoutErrorMessage: "Request Timeout Error",
});

const handleRequest = async (request: InternalAxiosRequestConfig) => {
  const { headers } = request;
  const accessToken = getCookie(CookieName.accessToken);

  const errorCodeList = getCookie(CookieName.errorCodeList);
  if (errorCodeList == null) {
    try {
      const resErrorCode = await axios.get(API_ROUTES.utilities.errorCodeList);
      const resData = resErrorCode.data;
      setCookie(CookieName.errorCodeList, JSON.stringify(resData.data), false, {
        expires: 1,
      });
    } catch (err) {
      return Promise.reject(err);
    }
  }

  if (accessToken == null) return request;
  headers["Authorization"] = `Bearer ${accessToken}`;
  return request;
};

const errorHandler = async (error: any) => {
  const refreshToken = getCookie(CookieName.refreshToken);
  if (refreshToken == null) return Promise.reject(error);

  if (
    error?.response?.data?.errors != null &&
    error?.response?.data?.errors?.general === "UNAUTHORIZED"
  ) {
    try {
      const resRefresh = await axios.post(API_ROUTES.auth.refreshToken, {
        refresh_token: refreshToken,
      });

      const resBody = await resRefresh.data;

      setCookie(CookieName.accessToken, resBody.data.access_token, true);
      setCookie(CookieName.refreshToken, resBody.data.refresh_token, true);
    } catch (err) {
      // logoutService(refreshToken ?? "");
      removeCookie(CookieName.accessToken);
      removeCookie(CookieName.refreshToken);
      removeCookie(CookieName.rememberMe);
      window.location.href = "/";
      return Promise.reject(err);
    }
  }
  return Promise.reject(error);
};

authAxios.interceptors.request.use(
  (req) => handleRequest(req),
  (err) => errorHandler(err)
);

authAxios.interceptors.response.use(
  (res) => res,
  (err) => errorHandler(err)
);

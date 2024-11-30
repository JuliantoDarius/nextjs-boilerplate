import { authAxios } from "@lib/axiosClient.lib";
import { API_ROUTES } from "@utils/common/api-route.common";
import { API_BASE_URL } from "@utils/common/constants.common";
import {
  ChangePasswordPayload,
  ForgotPasswordPayload,
  LoginPayload,
  RegisterPayload,
} from "@utils/types/fetching/auth.type";
import axios from "axios";

export const loginService = async (data: LoginPayload) => {
  try {
    const url = `${API_BASE_URL}${API_ROUTES.auth.login}`;
    const body: LoginPayload = {
      username: data.username,
      password: data.password,
      // remember_me: data.remember_me ?? false,
    };
    const response = await axios.post(url, body);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const logoutService = async (refreshToken: string) => {
  try {
    const res = await authAxios.post(API_ROUTES.auth.logout, {
      refresh_token: refreshToken,
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

// * Register
export const registerService = async (data: RegisterPayload) => {
  try {
    const url = `${API_BASE_URL}${API_ROUTES.auth.register}`;
    const body: Omit<RegisterPayload, "confirm_password"> = {
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      password: data.password,
    };
    const response = await axios.post(url, body);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const confirmAccountService = async (uuid: string | number) => {
  try {
    const url = `${API_BASE_URL}${API_ROUTES.auth.confirmAccount}`;
    const response = await axios.post(url, { uuid });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const confirmAccountUUIDService = async (uuid: string | number) => {
  try {
    const url = `${API_BASE_URL}${API_ROUTES.auth.confirmAccountUUID(uuid)}`;
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw err;
  }
};

// * Forgot Password
export const forgotPasswordService = async (data: ForgotPasswordPayload) => {
  try {
    const url = `${API_BASE_URL}${API_ROUTES.auth.forgotPassword}`;
    const response = await axios.post(url, { email: data.email });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const forgotPasswordUUIDService = async (uuid: string | number) => {
  try {
    const url = `${API_BASE_URL}${API_ROUTES.auth.forgotPasswordUUID(uuid)}`;
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw err;
  }
};

// * Change Password
export const changePasswordService = async (data: ChangePasswordPayload) => {
  try {
    const url = `${API_BASE_URL}${API_ROUTES.auth.changePassword}`;
    const response = await axios.post(url, data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

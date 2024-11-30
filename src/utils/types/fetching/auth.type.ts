import { UseFormReturnType } from "@mantine/form";
import { Id } from "react-toastify";

export type LoginPayload = {
  username: string;
  password: string;
  toastId?: Id;
  form?: UseFormReturnType<LoginPayload>;
};

export type ForgotPasswordPayload = {
  email: string;
  form?: UseFormReturnType<ForgotPasswordPayload>;
};

export type ChangePasswordPayload = {
  uuid: string;
  password: string;
  repeat_password: string;
};

export type RegisterPayload = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  is_agree?: boolean;
};

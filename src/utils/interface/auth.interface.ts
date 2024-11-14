import { UseFormReturnType } from "@mantine/form";

export interface LoginPayload {
  email: string;
  password: string;
  remember_me?: boolean;
  form?: UseFormReturnType<LoginPayload>;
}

export interface ForgotPasswordPayload {
  email: string;
  form?: UseFormReturnType<ForgotPasswordPayload>;
}

export interface ChangePasswordPayload {
  uuid: string;
  password: string;
  repeat_password: string;
}

export interface RegisterPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  is_agree?: boolean;
}

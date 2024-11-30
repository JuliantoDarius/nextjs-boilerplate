import {
  changePasswordService,
  confirmAccountService,
  confirmAccountUUIDService,
  forgotPasswordService,
  forgotPasswordUUIDService,
  loginService,
  logoutService,
  registerService,
} from "@services/auth.service";
import { MutationOptions } from "@utils/types/react-query.type";
import { useMutation } from "@tanstack/react-query";
import {
  ChangePasswordPayload,
  ForgotPasswordPayload,
  LoginPayload,
  RegisterPayload,
} from "@utils/types/fetching/auth.type";

export const useLogin = (options?: MutationOptions<LoginPayload>) => {
  return useMutation({
    mutationFn: (data: LoginPayload) => loginService(data),
    ...options,
  });
};

export const useLogout = (options?: MutationOptions<string>) => {
  return useMutation({
    mutationFn: (refreshToken: string) => logoutService(refreshToken),
    ...options,
  });
};

// * Register
export const useRegister = (options?: MutationOptions<RegisterPayload>) => {
  return useMutation({
    mutationFn: (data: RegisterPayload) => registerService(data),
    ...options,
  });
};

export const useConfirmAccount = (
  options?: MutationOptions<string | number>
) => {
  return useMutation({
    mutationFn: (uuid: string | number) => confirmAccountService(uuid),
    ...options,
  });
};

export const useConfirmAccountUUID = (
  options?: MutationOptions<string | number>
) => {
  return useMutation({
    mutationFn: (uuid: string | number) => confirmAccountUUIDService(uuid),
    ...options,
  });
};

// * Forgot password
export const useForgotPassword = (
  options?: MutationOptions<ForgotPasswordPayload>
) => {
  return useMutation({
    mutationFn: (data: ForgotPasswordPayload) => forgotPasswordService(data),
    ...options,
  });
};

export const useForgotPasswordUUID = (
  options?: MutationOptions<string | number>
) => {
  return useMutation({
    mutationFn: (uuid: string | number) => forgotPasswordUUIDService(uuid),
    ...options,
  });
};

export const useChangePassword = (
  options?: MutationOptions<ChangePasswordPayload>
) => {
  return useMutation({
    mutationFn: (data: ChangePasswordPayload) => changePasswordService(data),
    ...options,
  });
};

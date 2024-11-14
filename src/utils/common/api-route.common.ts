const baseUrl = {
  auth: "/auth",
  utilities: "/utilities",
};

export const API_ROUTES = {
  auth: {
    login: baseUrl.auth,
    register: `${baseUrl.auth}/register`,
    logout: `${baseUrl.auth}/logout`,
    refreshToken: `${baseUrl.auth}/refresh-token`,
    forgotPassword: `${baseUrl.auth}/forgot-password`,
    forgotPasswordUUID: (uuid: string | number) =>
      `${baseUrl.auth}/forgot-password/${uuid}`,
    changePassword: `${baseUrl.auth}/forgot-password`,
    confirmAccount: `${baseUrl.auth}/confirm-account`,
    confirmAccountUUID: (uuid: string | number) =>
      `${baseUrl.auth}/confirm-account/${uuid}`,
  },
  utilities: {
    errorCodeList: `${baseUrl.utilities}/error-code-list`,
  },
};

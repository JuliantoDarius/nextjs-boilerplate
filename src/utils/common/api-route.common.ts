import { convertToQueryParams } from "@helpers/query.helper";
import { PaginationRequest } from "@utils/types/fetching/request.type";

const baseUrl = {
  auth: "/auth",
  utilities: "/utilities",
  accounts: "/accounts",
  incomes: "/incomes",
  expenses: "/expenses",
  transactions: "/transactions",
  mutations: "/mutations",
  users: "/users",
  dashboard: "/dashboard",
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
  users: {
    add: `${baseUrl.users}`,
    getAll: (payload: PaginationRequest) => {
      const params = convertToQueryParams(payload);
      return baseUrl.users + params;
    },
    profile: `${baseUrl.users}/profile`,
    getOne: (id: number) => `${baseUrl.users}/${id}`,
    reset: (id: number) => `${baseUrl.users}/${id}/reset`,
  },
  utilities: {
    errorCodeList: `${baseUrl.utilities}/error-code-list`,
  },
  accounts: {
    add: `${baseUrl.accounts}`,
    getAll: (payload: PaginationRequest) => {
      const params = convertToQueryParams(payload);
      return baseUrl.accounts + params;
    },
    getOne: (id: number) => `${baseUrl.accounts}/${id}`,
    balance: `${baseUrl.accounts}/adjust`,
  },
  incomes: {
    add: `${baseUrl.incomes}`,
    getAll: (payload: PaginationRequest) => {
      const params = convertToQueryParams(payload);
      return baseUrl.incomes + params;
    },
    getOne: (id: number) => `${baseUrl.incomes}/${id}`,
  },
  expenses: {
    add: `${baseUrl.expenses}`,
    getAll: (payload: PaginationRequest) => {
      const params = convertToQueryParams(payload);
      return baseUrl.expenses + params;
    },
    getOne: (id: number) => `${baseUrl.expenses}/${id}`,
  },
  transactions: {
    add: `${baseUrl.transactions}`,
    getAll: (payload: PaginationRequest) => {
      const params = convertToQueryParams(payload);
      return baseUrl.transactions + params;
    },
    getOne: (id: string) => `${baseUrl.transactions}/${id}`,
  },
  mutations: {
    types: `${baseUrl.mutations}/types`,
    getAll: (payload: PaginationRequest) => {
      const params = convertToQueryParams(payload);
      return baseUrl.mutations + params;
    },
    getOne: (id: string) => `${baseUrl.mutations}/${id}`,
  },
  dashboard: {
    getStatistics: (payload: PaginationRequest) => {
      const params = convertToQueryParams(payload);
      return baseUrl.dashboard + params;
    },
  },
};

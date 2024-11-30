import { PaginationRequest } from "@utils/types/fetching/request.type";

export enum CookieName {
  accessToken = "_Mor1entes",
  accessTokenExp = "_H4v3rts",
  refreshToken = "_M3s5i",
  rememberMe = "_C_R0n4lD0",
  errorCodeList = "_N3ym4r",
  forgotPasswordUUID = "_V4n=Der+V4art",
  profileData = "_M3nd13Ta",
}

export const initErrorResponse = {
  APIKEY_EXCEEDS_LIMIT: "Your apikey exceeds limit",
  AUTHENTICATION_FAILURE: "Authentication failure",
  BAD_REQUEST: "Bad request",
  EMAIL_ALREADY_EXISTS: "The email already registered",
  EMAIL_NOT_VALID: "The email is not valid",
  EXTENSION_NOT_ALLOWED: "This file type is not allowed",
  INTERNAL_ERROR: "Internal server error",
  INVALID_APIKEY: "Apikey is not valid",
  INVALID_PASSWORD: "Invalid password",
  "MAX_[X]": "max [x]",
  "MIN_[X]": "min [x]",
  MUST_NUMBER: "must number",
  NOT_BLANK: "not blank",
  NOT_FOUND: "not found",
  NOT_MATCH: "not match",
  NOT_PERMITTED: "You are not permitted to access this resource",
  NOT_VALID: "not valid",
  PASSWORD_NOT_MATCH: "The password is not match",
  TOO_MANY_REQUEST: "Too many request",
  UNAUTHORIZED: "Not authenticated, try again",
  UNPROCESSABLE_ENTITY: "not processable",
  USERNAME_OR_PASSWORD_INVALID: "Your email or password is invalid",
  USER_ALREADY_TRIAL: "You already have a trial account",
  USER_HAS_NO_PLAN: "You have no plan",
  USER_NOT_CONFIRMED: "You must confirm email to signup",
  USER_NOT_FOUND: "User not found",
  USER_PLAN_NEAR_EXPIRED: "You plan will be expired soon",
  USER_PLAN_WAS_EXPIRED: "Your plan was expired",
  USER_WAS_BANNED: "You are banned from the system",
  UUID_NOT_VALID: "The UUID token is not valid",
};

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const MAX_FILE_SIZE = 5000000;
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const initialPaginationPayload = (): // profileData?: UserProfileData
PaginationRequest => {
  const body: PaginationRequest = {
    limit_per_page: 10,
    page: 1,
    q: "",
    start_date: "",
    end_date: "",
  };

  // if (profileData?.is_admin === true) {
  //   body.view_all = profileData?.is_admin === true ? "true" : undefined;
  //   body.user_id = profileData.user_id;
  // }
  return body;
};

export const limitOptions = [
  {
    value: 5,
    label: "5",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 15,
    label: "15",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 25,
    label: "25",
  },
];

export enum BaseQueryKey {
  accounts = "accounts",
  expenses = "expenses",
  incomes = "incomes",
  users = "users",
  dashboard = "dashboard",
  mutations = "mutations",
  transactions = "transactions",
}

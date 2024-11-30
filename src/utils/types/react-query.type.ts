import {
  UndefinedInitialDataOptions,
  UseMutationOptions,
} from "@tanstack/react-query";

export type MutationOptions<T, TData = any> = UseMutationOptions<
  TData,
  Error,
  T,
  unknown
>;

export type QueryOptions<T> = UndefinedInitialDataOptions<any, Error, T, any[]>;

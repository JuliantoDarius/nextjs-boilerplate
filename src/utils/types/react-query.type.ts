import { UseMutationOptions } from "@tanstack/react-query";

export type MutationOptions<T> = UseMutationOptions<any, Error, T, unknown>;

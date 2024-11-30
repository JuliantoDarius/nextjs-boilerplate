type ResponseData = {
  total_data: number;
  pagination: {
    total_page: number;
    current_page: number;
    limit_per_page: number;
  };
};

export type Response<T> = {
  code: number;
  status: string;
  data: ResponseData & T;
  errors: unknown;
};

export type ResponseDetail<T> = Omit<Response<T>, "data"> & { data: T };

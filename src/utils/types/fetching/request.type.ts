export type PaginationRequest = {
  q: string;
  page: number;
  limit_per_page: number;
  start_date?: string;
  end_date?: string;
  view_all?: string;
  user_id?: number;
  mutation_type?: number | null;
  is_day?: boolean;
  is_week?: boolean;
  is_month?: boolean;
  account_id?: number;
};

export type DetailPaginationRequest = PaginationRequest & { id?: number };

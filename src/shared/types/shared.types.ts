export interface Response {
  message: string;
}

export type PaginatedResponse<T> = {
  data: T[];
  pagination: {
    total: number;
    currentPage: number;
    totalPages: number;
  }

};
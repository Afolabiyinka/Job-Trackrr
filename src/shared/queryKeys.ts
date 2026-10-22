export const queryKeys = {
  user: ["user"] as const,
  contacts: ["contacts"] as const,
  dashboard: ["dashboard"] as const,
  jobs: {
    all: ["jobs"] as const,
    list: (page: number) => ["jobs", page] as const,
  },
  job: {
    all: ["job"] as const,
    detail: (id: string) => ["job", id] as const,
  },
  search: {
    results: (query: string) => ["search-results", query] as const,
  },
  logo: ["logo"] as const,
} as const;

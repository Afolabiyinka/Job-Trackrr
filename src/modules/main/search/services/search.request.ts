import { apiClient } from "@/shared/api/axios-config"
import { type PaginatedResponse } from "@/shared/types/shared.types"
import type { Job } from "../../jobs/types/job.types"

export const searchJobs = async (query: string) => {
   try {
      const res = await apiClient.get<PaginatedResponse<Job>>(`/jobs/search?q=${query}`, { withCredentials: true })
      return res.data
   } catch (err) {
      throw new Error()
   }
}
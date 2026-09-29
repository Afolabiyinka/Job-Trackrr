import axios from "axios";
import { prodEndpoint, testingEndpoint } from "./api-data";

export const apiClient = axios.create({
   baseURL: testingEndpoint,
   headers: {
      Accept: "application/json",
   },
   withCredentials: true,
});
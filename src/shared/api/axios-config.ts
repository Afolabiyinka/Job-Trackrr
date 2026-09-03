import axios from "axios";
import { prodEndpoint } from "./api-data";

export const apiClient = axios.create({
   baseURL: prodEndpoint,
   headers: {
      Accept: "application/json",
   },
   withCredentials: true,
});
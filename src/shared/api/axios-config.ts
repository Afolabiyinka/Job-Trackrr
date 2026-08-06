import axios from "axios";
import { tempEndpoint } from "./api-data";

export const apiClient = axios.create({
   baseURL: tempEndpoint,
   headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
   },
   withCredentials: true,
});
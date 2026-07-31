import axios from "axios";
import { testingEndpoint } from "../constants/api-data";

export const apiClient = axios.create({
   baseURL: testingEndpoint,
   headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
   },
   withCredentials: true,
});
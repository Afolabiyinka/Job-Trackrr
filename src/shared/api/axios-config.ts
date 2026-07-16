import axios from "axios";
import { tempEndpoint } from "../constants/api-data";

export const apiClient = axios.create({
   baseURL: tempEndpoint,
   headers: {
      "Content-Type": "application/json",
   },
   withCredentials: true,
});



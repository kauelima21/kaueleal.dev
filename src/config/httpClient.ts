import axios from "axios";

export const httpClient = axios.create({
  baseURL: 'https://api.kaueleal.dev',
  headers: {
    'Content-Type': 'application/json',
  },
});

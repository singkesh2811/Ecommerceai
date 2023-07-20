import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWZkMzY1YzUxN2JkYjJhMGM3Y2I5MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODE5NjAwMiwiZXhwIjoxNjg4NDU1MjAyfQ.pEGx5F5cbonAD3qLRaKgUp_AETVcbi0umhsxV3XE8zk";
export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });
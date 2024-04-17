import axios from "axios";

export const api = axios.create({
  baseURL: "https://heyfood-backend.onrender.com",
});

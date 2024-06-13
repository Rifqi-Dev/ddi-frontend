import axios from "axios";
import { API_URL } from ".";

export const LoginService = async (payload) => {
  return axios.post(API_URL + "auth", payload);
};

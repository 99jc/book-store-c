import { SignupProps } from "../pages/Signup";
import { httpClient } from "./http";

export const signup = async (userData: SignupProps) => {
  const response = await httpClient.post("/auth/signup", userData);
  return response.data;
};

export const resetRequest = async (data: SignupProps) => {
  const response = await httpClient.post("/auth/reset", data);
  return response.data;
};

export const resetPassword = async (data: SignupProps) => {
  const response = await httpClient.put("/auth/reset", data);
  return response.data;
};

interface LoginResponse {
  token: string;
}

export const login = async (userData: SignupProps) => {
  const response = await httpClient.post<LoginResponse>(
    "/auth/signin",
    userData,
  );
  return response.data;
};

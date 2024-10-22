import { kyInstance } from "@/api";

export const postSignin = async (email: string, password: string) => {
  const response = await kyInstance
    .post("api/user/sign-in", {
      json: {
        email,
        password,
      },
    })
    .json();

  return response;
};

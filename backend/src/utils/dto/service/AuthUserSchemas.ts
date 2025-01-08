import { z } from "zod";
export interface IAuthenticateRequest {
  login: string;
  password: string;
}

export const AuthenticateSchemas = z.object({
  login: z.string({
    invalid_type_error: "Esse campo precisa ser uma string",
    required_error: "Esse e um campo obrigatorio",
  }),
  password: z.string({
    invalid_type_error: "Esse campo precisa ser uma string",
    required_error: "Esse e um campo obrigatorio",
  }),
});

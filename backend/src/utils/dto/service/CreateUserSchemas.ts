import { z } from "zod";

export interface ICreateUser {
  password: string;
  name: string;
  login: string;
  email: string;
  document: string;
}

export const CreateUserSchemas = z.object({
  password: z.string({
    invalid_type_error: "Esse Campo Precisa Ser Uma String",
    required_error: "Esse Campo e Obrigatorio",
  }),
  name: z.string({
    invalid_type_error: "Esse Campo Precisa Ser Uma String",
    required_error: "Esse Campo e Obrigatorio",
  }),
  login: z.string({
    invalid_type_error: "Esse Campo Precisa Ser Uma String",
    required_error: "Esse Campo e Obrigatorio",
  }),
  email: z.string({
    invalid_type_error: "Esse Campo Precisa Ser Uma String",
    required_error: "Esse Campo e Obrigatorio",
  }),
  document: z.string({
    invalid_type_error: "Esse Campo Precisa Ser Uma String",
    required_error: "Esse Campo e Obrigatorio",
  }),
});

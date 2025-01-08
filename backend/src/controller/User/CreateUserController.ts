import { Response } from "express";
import { Request } from "express";
import { CreateUserService } from "../../service/user/CreateUserService";
import { CreateUserSchemas } from "../../utils/dto/service/CreateUserSchemas";
import { ZodError } from "zod";
import { formatZodError } from "../../utils/dto/zodError";

export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { document, email, login, name, password } = await CreateUserSchemas.parseAsync(req.body);
      const response = await this.createUserService.execute({
        document,
        email,
        login,
        name,
        password,
      });
      return res.status(201).json(response);
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedError = formatZodError(error);
        return res.status(400).json({ error: "Erro de validação", details: formattedError });
      }
      console.error("Erro ao processar a requisição:", error);
      const errorMessage = (error as Error).message || "Erro desconhecido";
      return res.status(500).json({ error: errorMessage || "Erro interno do servidor" });
    }
  }
}

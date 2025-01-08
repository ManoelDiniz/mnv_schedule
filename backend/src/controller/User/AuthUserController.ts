import { AuthenticateSchemas } from "../../utils/dto/service/AuthUserSchemas";
import { AuthUserService } from "../../service/user/AuthUserService";
import { Request } from "express";
import { Response } from "express";
import { ZodError } from "zod";
import { formatZodError } from "../../utils/dto/zodError";

export class AuthUserController {
  constructor(private readonly authUserService: AuthUserService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { login, password } = await AuthenticateSchemas.parseAsync(req.body);
      const response = await this.authUserService.execute({
        login,
        password,
      });
      return res.status(200).json(response);
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

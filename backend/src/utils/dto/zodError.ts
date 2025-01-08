import { ZodError } from "zod";

export function formatZodError(error: ZodError): string {
  const formattedErrors = error.errors.map((err) => {
    const field = err.path.join(".");
    return `Campo '${field}': ${err.message}`;
  });

  return `Erro ao criar configuração:\n${formattedErrors.join("\n")}`;
}

import bcrypt from "bcrypt";
import { IAuthenticateRequest } from "../../utils/dto/service/AuthUserSchemas";
import { UserRepository } from "./../../repository/user/UserRepository";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export class AuthUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({ login, password }: IAuthenticateRequest): Promise<string> {
    const auth = await this.userRepository.get({
      login,
    });
    if (!auth) throw new Error("Incorrect Login");

    const verifyPassword = await bcrypt.compare(password, auth.password);
    if (!verifyPassword) throw new Error("Incorrect password");

    const token = jwt.sign({ id: auth.id }, process.env.JWT_PASS, {
      expiresIn: "2h",
    });
    return token;
  }
}

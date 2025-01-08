import { ICreateUser } from "../../utils/dto/service/CreateUserSchemas";
import { UserRepository } from "../../repository/user/UserRepository";
import bcrypt from "bcrypt";

export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({ email, login, name, password, document }: ICreateUser): Promise<string> {
    const validUser = await this.userRepository.get({ document });
    if (validUser) throw new Error("Document already registered");

    const validLogin = await this.userRepository.get({ login });
    if (validLogin) throw new Error("Login already registered");

    const validEmail = await this.userRepository.get({ email });
    if (validEmail) throw new Error("Email already registered");

    const hashedPassword = await bcrypt.hash(password, 10);

    await this.userRepository.create({
      document,
      email,
      name,
      login,
      password: hashedPassword,
    });
    return "Usuario Registrado Com Sucesso";
  }
}

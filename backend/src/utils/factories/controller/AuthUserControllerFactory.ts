import { AuthUserController } from "../../../controller/User/AuthUserController";
import { UserRepository } from "../../../repository/user/UserRepository";
import { AuthUserService } from "../../../service/user/AuthUserService";

class AuthUserControllerFactory {
  static create(): AuthUserController {
    const userRepository = new UserRepository();
    const authUserService = new AuthUserService(userRepository);
    return new AuthUserController(authUserService);
  }
}

export { AuthUserControllerFactory };

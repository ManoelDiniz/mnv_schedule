import { CreateUserController } from "../../../controller/User/CreateUserController";
import { UserRepository } from "../../../repository/user/UserRepository";
import { CreateUserService } from "../../../service/user/CreateUserService";

class CreateUserControllerFactory {
  static create(): CreateUserController {
    const userRepository = new UserRepository();
    const createUserService = new CreateUserService(userRepository);
    return new CreateUserController(createUserService);
  }
}

export { CreateUserControllerFactory };

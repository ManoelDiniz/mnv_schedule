import { AuthUserControllerFactory } from "../../utils/factories/controller/AuthUserControllerFactory";
import { CreateUserControllerFactory } from "../../utils/factories/controller/CreateUserControllerFactory";
import { Router } from "express";

const router = Router();

const CreateUserController = CreateUserControllerFactory.create();
const AuthUserController = AuthUserControllerFactory.create();

router.post("/register", async (req, res) => {
  try {
    await CreateUserController.handle(req, res);
  } catch (error) {
    res.status(500).json({ message: "Erro interno do servidor", error: error });
  }
});

router.post("/login", async (req, res) => {
  try {
    await AuthUserController.handle(req, res);
  } catch (error) {
    res.status(500).json({ message: "Erro interno do servidor", error: error });
  }
});

export default router;

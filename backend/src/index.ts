/* eslint-disable no-console */
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors"; // Importa o middleware CORS
import { AppDataSource } from "./database/dataSource";
import user from "./routes/user/UserRoute";

dotenv.config();
const app = express();

const port = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());

AppDataSource.initialize();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.use("/user", user);

app.listen(port, async () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

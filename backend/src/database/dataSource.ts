import "reflect-metadata";
import * as dotenv from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import Entities from "./entity";

dotenv.config();

const options: DataSourceOptions & SeederOptions = {
  type: "mysql",
  port: Number(process.env.DB_PORT),
  synchronize: true,
  logging: false,
  migrations: [`${__dirname}/**/**/migrations/*.{js,ts}`],
  subscribers: [],
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  seeds: [],
  entities: Entities,
};

export const AppDataSource = new DataSource(options);

import { DataSource, DataSourceOptions } from "typeorm";
import 'dotenv/config'; 

const dataSourceOptions: DataSourceOptions = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    entities: ["src/entity/*.ts"],
};

export const AppDataSource = new DataSource(dataSourceOptions);

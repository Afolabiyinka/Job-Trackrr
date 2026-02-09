import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";
configDotenv();

export const sequelize = new Sequelize(
  process.env.DATABASE_NAME as string,
  process.env.DATABASE_USERNAME as string,
  process.env.DATABASE_PASSWORD as string,
  {
    port: Number(process.env.DATABASE_HOST),
    host: process.env.DATABASE_HOST as string,
    dialect: "postgres",
    logging: false,
  }
);
export const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Postgres Sql connected succesfully");
  } catch (err) {
    console.log("Unable to connect to db", err);
  }
};

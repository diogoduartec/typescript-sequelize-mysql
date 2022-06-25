import { Sequelize } from "sequelize";

const prefix = process.env.NODE_ENV === "test" ? "TEST_" : "";

const DATABASE_NAME = `${prefix}DATABASE_NAME`;
const DATABASE_USER = `${prefix}DATABASE_USER`;
const DATABASE_PASS = `${prefix}DATABASE_PASS`;
const DATABASE_HOST = `${prefix}DATABASE_HOST`;
const DATABASE_PORT = `${prefix}DATABASE_PORT`;

const db = new Sequelize(
  process.env[DATABASE_NAME],
  process.env[DATABASE_USER],
  process.env[DATABASE_PASS],
  {
    dialect: "mysql",
    host: process.env[DATABASE_HOST],
    port: +process.env[DATABASE_PORT],
  }
);

export default db;

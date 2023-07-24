import path from 'path';
import * as dotenv from 'dotenv';
import { cleanEnv, port, str } from 'envalid';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: path.join(process.cwd(), `.env.${process.env.NODE_ENV}`),
  });
}

function validateEnv(): void {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    DB_DAILECT: str(),
    DB_HOST: str(),
    DB_USERNAME: str(),
    DB_PASS: str(),
    DB_NAME: str(),
    DB_LOGGING: str(),
    JWT_SECRET: str(),
  });
}

export default validateEnv;

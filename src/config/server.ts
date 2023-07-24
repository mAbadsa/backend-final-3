import * as dotenv from 'dotenv';

dotenv.config();

const { PORT, NODE_ENV, JWT_SECRET } = process.env;

const config = (): Record<string, string> => ({
  port: PORT,
  nodeEnv: NODE_ENV,
  secretKey: JWT_SECRET,
});

export default config;

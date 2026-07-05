import * as fs from 'fs';
import dotenv from 'dotenv';

const envType = process.env.ENV_TYPE || 'local';
const envFilePath = `./env/.env.${envType}`;

if (fs.existsSync(envFilePath)) {
  dotenv.config({ path: envFilePath });
}

const isLocalEnv = process.env.ENV_TYPE === 'local';

export const ROUTES = {
  home: '/',
  articleEditor:
    process.env.ARTICLE_EDITOR_ROUTE || (isLocalEnv ? '/#/editor' : '/editor'),
  login: process.env.LOGIN_ROUTE || (isLocalEnv ? '/#/login' : '/user/login'),
  register:
    process.env.REGISTER_ROUTE || (isLocalEnv ? '/#/register' : '/user/register'),
};

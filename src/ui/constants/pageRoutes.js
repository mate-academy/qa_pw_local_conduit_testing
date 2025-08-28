import * as dotenv from 'dotenv';
dotenv.config({ path: './env/.env.local' });

export const ROUTES = {
  home: process.env.ROUTE_HOME,
  articleEditor: process.env.ROUTE_EDITOR,
  login: process.env.ROUTE_LOGIN,
  register: process.env.ROUTE_REGISTER,
};

import { loadEnvFile } from '../../common/helpers/loadEnvFile';
loadEnvFile(); // uses ENV_TYPE=local or staging

export const ROUTES = {
  home: `${process.env.BASE_URL}${process.env.HOME_ROUTE}`,
  articleEditor: `${process.env.BASE_URL}${process.env.ARTICLE_EDITOR_ROUTE}`,
  login: `${process.env.BASE_URL}${process.env.LOGIN_ROUTE}`,
  register: `${process.env.BASE_URL}${process.env.REGISTER_ROUTE}`,
};

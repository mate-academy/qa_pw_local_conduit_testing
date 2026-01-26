export const ROUTES = {
  home: '/',
  articleEditor: process.env.EDITOR_ROUTE || '/editor',
  login: process.env.LOGIN_ROUTE || `/user/login`,
  register: process.env.REGISTER_ROUTE || `/user/register`,
};

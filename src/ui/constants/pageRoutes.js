export const ROUTES = {
  get home() {
    return process.env.ROUTE_HOME ?? '/';
  },
  get articleEditor() {
    return process.env.ROUTE_ARTICLE_EDITOR ?? '/editor';
  },
  get login() {
    return process.env.ROUTE_LOGIN ?? '/user/login';
  },
  get register() {
    return process.env.ROUTE_REGISTER ?? '/user/register';
  },
};

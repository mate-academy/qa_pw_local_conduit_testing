export const ROUTES = {
  get home() {
    return process.env.HOME_ROUTE;
  },

  get articleEditor() {
    return process.env.ARTICLE_EDITOR_ROUTE;
  },

  get login() {
    return process.env.LOGIN_ROUTE;
  },

  get register() {
    return process.env.REGISTER_ROUTE;
  },
};

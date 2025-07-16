const { ROUTE_REGISTER, ROUTE_EDITOR, ROUTE_LOGIN } = process.env;

export const ROUTES = {
  home: '/',
  articleEditor: ROUTE_EDITOR,
  login: ROUTE_LOGIN,
  register: ROUTE_REGISTER,
};

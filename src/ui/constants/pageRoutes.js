const getRouteEnv = (key, fallback) => {
  const value = process.env[key];
  return value && value.length > 0 ? value : fallback;
};

export const ROUTES = {
  home: getRouteEnv('HOME_ROUTE', '/'),
  articleEditor: getRouteEnv('ARTICLE_EDITOR_ROUTE', '/editor'),
  login: getRouteEnv('LOGIN_ROUTE', '/login'),
  register: getRouteEnv('REGISTER_ROUTE', '/register'),
};

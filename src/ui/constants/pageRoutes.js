const ENV_TYPE = process.env.ENV_TYPE || 'local';

const routesByEnv = {
  local: {
    home: '/',
    login: '#/login',
    register: '#/register',
    articleEditor: '#/editor',
  },
  staging: {
    home: '/',
    login: '/user/login',
    register: '/user/register',
    articleEditor: '/editor',
  },
};

export const ROUTES = routesByEnv[ENV_TYPE];

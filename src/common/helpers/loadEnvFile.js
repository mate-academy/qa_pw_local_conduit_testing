import * as fs from 'fs';

export function loadEnvFile(envType = process.env.ENV_TYPE) {
  if (!envType) {
    throwMissinEnvTypeError();
  }

  const envFolderPath = './env';
  const envFilePath = `${envFolderPath}/.env.${envType}`;

  if (!fs.existsSync(envFilePath)) {
    throw new Error(`Missing the config file ${envFilePath}`);
  }

  require('dotenv').config({ path: envFilePath, override: true });
}

export function throwMissinEnvTypeError() {
  throw new Error(
    'The ENV_TYPE is undefined. Check the ENV_TYPE env variable is set.',
  );
}

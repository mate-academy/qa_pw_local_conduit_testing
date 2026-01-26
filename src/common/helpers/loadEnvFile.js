import * as fs from 'fs';
import dotenv from 'dotenv';

export function loadEnvFile(envType) {
  const envFolderPath = './env';
  const envFilePath = `${envFolderPath}/.env.${envType}`;

  if (!fs.existsSync(envFilePath)) {
    throw new Error(`Missing the config file ${envFilePath}`);
  }

  dotenv.config({ path: envFilePath });
}

export function throwMissinEnvTypeError() {
  throw new Error(
    'The ENV_TYPE is undefined. Check the ENV_TYPE env variable is set.',
  );
}

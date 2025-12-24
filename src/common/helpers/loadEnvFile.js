import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';

export function loadEnvFile(envType) {
  if (!envType) {
    throw new Error(
      'The ENV_TYPE is undefined. Set ENV_TYPE environment variable.',
    );
  }

  const envFolderPath = path.resolve('./env');
  const envFilePath = path.join(envFolderPath, `.env.${envType}`);

  if (!fs.existsSync(envFilePath)) {
    console.warn(
      `Warning: Missing the config file ${envFilePath}. ` +
        `Using default environment variables.`,
    );
    return;
  }

  const result = dotenv.config({ path: envFilePath });

  if (result.error) {
    console.error(`Failed to load env file ${envFilePath}:`, result.error);
  } else {
    console.log(`Loaded env file: ${envFilePath}`);
  }
}

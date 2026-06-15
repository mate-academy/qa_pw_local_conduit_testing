import local from './local';
import staging from './staging';

import { throwMissinEnvTypeError } from '../../../src/common/helpers/loadEnvFile';

const sets = { local, staging };
export default sets[process.env.ENV_TYPE] || throwMissinEnvTypeError();

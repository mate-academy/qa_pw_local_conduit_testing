import local from './local';
import stagging from './stagging';

const sets = { local, stagging };
export default sets[process.env.ENV_TYPE] ?? stagging;

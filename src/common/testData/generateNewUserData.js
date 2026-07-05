import { faker } from '@faker-js/faker';

export function generateNewUserData(logger = null) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const compliantPassword = `Qa${faker.string.alphanumeric(6)}1a`;

  const user = {
    username: `${firstName}_${lastName}`.replaceAll(`'`).toLowerCase(),
    email: `${firstName}_${faker.internet.email()}`.toLowerCase(),
    password: compliantPassword,
  };

  if (logger) {
    logger.debug(`Generated new user data: ${JSON.stringify(user)}`);
  }
  return user;
}

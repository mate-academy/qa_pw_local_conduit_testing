import { faker } from '@faker-js/faker';

export function generateNewUserData(logger = null) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  const user = {
    username: `${firstName}_${lastName}`.replaceAll("'", '').toLowerCase(),
    email: `${firstName}_${faker.internet.email()}`.toLowerCase(),
    password: `Aa1${faker.internet.password({
      length: 12,
      memorable: false,
      pattern: /[A-Za-z0-9]/,
    })}`,
  };

  if (logger) {
    logger.debug(`Generated new user data: ${JSON.stringify(user)}`);
  }

  return user;
}

import { faker } from '@faker-js/faker';

export function generateNewUserData(logger = null) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  const user = {
    username: `${firstName}_${lastName}`.replaceAll(`'`, '').toLowerCase(),
    email: `${faker.internet.email({ firstName })}`.toLowerCase(),
    password: faker.internet.password({ length: 8 }),
  };

  if (logger) {
    logger.debug(`Generated new user data: ${JSON.stringify(user)}`);
  }
  return user;
}

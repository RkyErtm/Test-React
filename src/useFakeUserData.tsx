/* eslint-disable @typescript-eslint/no-unused-vars */
import {faker} from '@faker-js/faker';

export interface IUser {
  id: string;
  name: string;
  surname: string;
  avatar: string;
  email: string;
  messages: number;
}

export const userFakeUserData = () => {
  const users: Array<IUser> = [];

  for (let index = 0; index < 20; index++) {
    users.push({
      id: faker.string.uuid(),
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
      messages: faker.number.int() % 5,
    });
  }
  return users;
};

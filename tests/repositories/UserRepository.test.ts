import { UserModel } from "../../src/database/models/UserModel";
import { User } from "../../src/entities/User";
import UserRepository from "../../src/repositories/UserRepository";

beforeEach(async () => {
  await UserModel.sync({ force: true });
});

const defaultUser: User = {
  name: "Diogo",
  email: "diogo@mail.com",
  age: 23,
};

const createUser = async (user: User) => {
  await UserModel.create({ ...user });
};

describe("Create user", () => {
  test("should create an user", async () => {
    await UserRepository.create(defaultUser);
    const user = await UserModel.findOne({
      where: { email: defaultUser.email },
    });
    expect(user.toJSON()).toMatchObject(defaultUser);
  });
});

describe("List users", () => {
  test("should list all users", async () => {
    await createUser(defaultUser);
    await createUser(defaultUser);
    const users = await UserRepository.list();
    expect(users.length).toBe(2);
  });
});

describe("Get user", () => {
  test("should return a user by id", async () => {
    await createUser(defaultUser);
    const user = await UserRepository.get(1);
    expect(user).toMatchObject(defaultUser);
  });
});

describe("Get user", () => {
  test("should return a user by id", async () => {
    await createUser(defaultUser);
    const user = await UserRepository.get(1);
    expect(user).toMatchObject(defaultUser);
  });
});

describe("Update user", () => {
  test("should update name of user", async () => {
    await createUser(defaultUser);
    await UserRepository.update(1, { name: "John" });
    const user = await UserModel.findOne({ where: { id: 1 } });
    expect(user.toJSON().name).toBe("John");
  });
});

describe("Delete user", () => {
  test("should delete user by id", async () => {
    await createUser(defaultUser);
    await UserRepository.destroy(1);
    const user = await UserModel.findOne({ where: { id: 1 } });
    expect(user).toBeNull();
  });
});

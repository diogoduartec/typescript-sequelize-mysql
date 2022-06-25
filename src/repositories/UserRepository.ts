import { UserModel } from "../database/models/UserModel";
import { User } from "../entities/User";

class UserRepository {
  async list() {
    return (await UserModel.findAll()).map((user) => {
      return user.toJSON();
    });
  }

  async get(userId: number) {
    return (await UserModel.findOne({ where: { id: userId } })).toJSON();
  }

  async create(user: User) {
    await UserModel.create({ ...user });
  }

  async update(userId: number, partialUpdate: object) {
    await UserModel.update(partialUpdate, { where: { id: userId } });
  }

  async destroy(userId: number) {
    await UserModel.destroy({ where: { id: userId } });
  }
}

export default new UserRepository();

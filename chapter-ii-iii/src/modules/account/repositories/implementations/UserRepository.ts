import { getRepository, Repository } from "typeorm";
import { IUserRepository } from "..";
import { IUserCreate, User } from "../../entities";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  findById = async (id: string): Promise<User | undefined> => {
    return this.repository.findOne(id);
  };

  findByEmail = async (email: string): Promise<User | undefined> => {
    return this.repository.findOne({ email });
  };

  save = async (user: IUserCreate): Promise<User> => {
    return this.repository.save(user);
  };
}

export { UserRepository };

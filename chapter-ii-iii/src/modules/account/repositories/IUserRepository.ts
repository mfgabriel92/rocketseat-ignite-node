import { User, IUserCreate } from "../entities";

interface IUserRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  save(data: IUserCreate): Promise<User>;
}

export { IUserRepository };

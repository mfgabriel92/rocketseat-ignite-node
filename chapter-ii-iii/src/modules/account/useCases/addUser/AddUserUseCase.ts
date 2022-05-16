import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { Exception } from "../../../../shared/exceptions/Exception";
import { IUserCreate, IUserCreateResponse, User } from "../../entities";
import { IUserRepository } from "../../repositories";

@injectable()
class AddUserUseCase {
  constructor(
    @inject("UserRepository")
    private repository: IUserRepository
  ) {}

  execute = async (user: IUserCreate): Promise<IUserCreateResponse> => {
    const existingUser = await this.repository.findByEmail(user.email);

    if (existingUser) {
      throw new Exception(`The e-mail "${user.email}" is already taken`);
    }

    const hashedPassword = await hash(user.password, 8);
    const newUser = new User();

    newUser.name = user.name;
    newUser.username = user.username;
    newUser.email = user.email;
    newUser.password = hashedPassword;
    newUser.driver_license = user.driver_license;

    await this.repository.save(newUser);

    const response: IUserCreateResponse = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };

    return response;
  };
}

export { AddUserUseCase };

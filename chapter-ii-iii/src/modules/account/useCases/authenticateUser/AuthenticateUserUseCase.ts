import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { Exception } from "../../../../shared/exceptions/Exception";
import { IUserLogin, IUserLoginResponse } from "../../entities";
import { IUserRepository } from "../../repositories";

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository")
    private repository: IUserRepository
  ) {}

  execute = async (user: IUserLogin): Promise<IUserLoginResponse> => {
    const existingUser = await this.repository.findByEmail(user.email);

    if (!existingUser) {
      throw new Exception("Email or password do not match.");
    }

    const isPassworcCorrect = await compare(
      user.password,
      existingUser.password
    );

    if (!isPassworcCorrect) {
      throw new Exception("Email or password do not match.");
    }

    const access_token = sign({}, `${process.env.JWT_SECRET}`, {
      subject: existingUser.id,
      expiresIn: "1d",
    });

    return {
      user: {
        name: existingUser.name,
        email: existingUser.email,
      },
      access_token,
    };
  };
}

export { AuthenticateUserUseCase };

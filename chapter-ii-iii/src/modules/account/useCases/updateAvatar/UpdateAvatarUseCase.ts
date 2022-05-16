import { inject, injectable } from "tsyringe";
import { remove } from "../../../../utils/file";
import { IUpdateAvatar } from "../../entities/dtos/IUpdateAvatar";
import { IUserRepository } from "../../repositories";

@injectable()
class UpdateAvatarUseCase {
  constructor(
    @inject("UserRepository")
    private repository: IUserRepository
  ) {}

  execute = async (request: IUpdateAvatar): Promise<void> => {
    const user = await this.repository.findById(request.user_id);

    if (user && request.avatar_url) {
      if (user.avatar_url) {
        await remove(`./tmp/avatar/${user.avatar_url}`);
      }

      user.avatar_url = request.avatar_url;
      await this.repository.save(user);
    }
  };
}

export { UpdateAvatarUseCase };

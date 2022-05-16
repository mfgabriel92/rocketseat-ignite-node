import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAvatarUseCase } from "./UpdateAvatarUseCase";

class UpdateAvatarController {
  handle = async (request: Request, response: Response): Promise<Response> => {
    const { user_id } = request.user;
    const avatar_url = request.file?.filename;
    const updateAvatarUseCase = container.resolve(UpdateAvatarUseCase);

    await updateAvatarUseCase.execute({ user_id, avatar_url });

    return response.status(204).send();
  };
}

export { UpdateAvatarController };

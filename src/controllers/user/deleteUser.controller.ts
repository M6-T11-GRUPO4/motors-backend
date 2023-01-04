import { Request, Response } from "express";
import deleteUserService from "../../services/user/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedUser = await deleteUserService(id);

  return res.status(204).json(deletedUser);
};

export default deleteUserController;

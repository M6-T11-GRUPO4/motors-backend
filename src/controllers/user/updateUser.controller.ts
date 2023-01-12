import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces";
import updateUserService from "../../services/user/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    name,
    email,
    password,
    birthdate,
    cpf,
    cellphone,
    description,
    is_active,
    is_seller,
  }: IUserRequest = req.body;

  const updateUser = await updateUserService(
    id,
    name,
    email,
    password,
    birthdate,
    cpf,
    cellphone,
    description,
    is_active,
    is_seller
  );

  return res.status(200).json(updateUser);
};

export default updateUserController;

import { Request, Response } from "express";

import { IUserRequest } from "../../interfaces";
import createUserService from "../../services/user/createUser.service";

const createUserController = async (req: Request, res: Response) => {
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
    cep,
    city,
    number,
    state,
    street,
    complement,
  }: IUserRequest = req.body;

  const userCreated = await createUserService({
    name,
    email,
    password,
    birthdate,
    cpf,
    cellphone,
    description,
    is_active,
    is_seller,
    cep,
    city,
    number,
    state,
    street,
    complement,
  });

  return res.status(201).json(userCreated);
};

export default createUserController;

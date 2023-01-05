import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces";
import userLoginService from "../../services/login/userLogin.service";

const userLoginController = async (req: Request, res: Response) => {
  const { email, password }: IUserLogin = req.body;
  const token = await userLoginService({ email, password });

  return res.status(200).json(token);
};

export default userLoginController;

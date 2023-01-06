import { Request, Response } from "express";
import { IResetPassword } from "../../interfaces";
import resetPasswordService from "../../services/user/resetPassword.service";

const resetPasswordController = async (req: Request, res: Response) => {
  const { email, token, password }: IResetPassword = req.body;

  const passwordReseted = await resetPasswordService({
    email,
    token,
    password,
  });

  return res.status(200).json({ message: passwordReseted });
};

export default resetPasswordController;

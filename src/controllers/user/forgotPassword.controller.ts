import { Request, Response } from "express";
import forgotPasswordService from "../../services/user/forgotPassword.service";

const forgotPasswordController = async (req: Request, res: Response) => {
  const { email } = req.body;

  const passwordForgot = await forgotPasswordService(email);

  return res.status(200).json({ message: passwordForgot });
};

export default forgotPasswordController;

import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";
import "dotenv/config";

const userIsHimselfMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.userId !== req.params.id) {
    throw new AppError(401, "Usuário não autorizado");
  }

  next();
};

export default userIsHimselfMiddleware;

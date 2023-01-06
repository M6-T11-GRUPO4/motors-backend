import { NextFunction, Request, Response } from "express";

import { AppError } from "../errors/appError";
import { prisma } from "../prismaClient";

const isSellerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.body.userId,
    },
  });

  if (!user) {
    throw new AppError(404, "Usuário não encontrado");
  }

  if (!user.is_seller) {
    throw new AppError(403, "Apenas anunciantes podem criar anúncios");
  }

  if (req.user.userId !== req.body.userId) {
    throw new AppError(403, "Apenas anunciantes podem criar anúncios");
  }

  next();
};

export default isSellerMiddleware;

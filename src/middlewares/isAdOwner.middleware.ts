import { NextFunction, Request, Response } from "express";

import { AppError } from "../errors/appError";
import { prisma } from "../prismaClient";

const isAdOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const vehicle = await prisma.vehicle.findUnique({
    where: {
      id,
    },
  });

  if (!vehicle) {
    throw new AppError(404, "Veículo não encontrado");
  }

  if (vehicle.userId !== req.user.userId) {
    throw new AppError(403, "Apenas dono do anúncio pode editá-lo");
  }

  next();
};

export default isAdOwnerMiddleware;

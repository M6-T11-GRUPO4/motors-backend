import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";
import { prisma } from "../prismaClient";

const verifyEmailAndCpfAvailabilityMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, cpf } = req.body;

  const emailAlreadyExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  const cpfAlreadyExists = await prisma.user.findUnique({
    where: {
      cpf,
    },
  });

  if (emailAlreadyExists) {
    throw new AppError(403, "Email já existe, faça o login.");
  }

  if (cpfAlreadyExists) {
    throw new AppError(403, "CPF já existe, faça o login.");
  }

  next();
};

export default verifyEmailAndCpfAvailabilityMiddleware;

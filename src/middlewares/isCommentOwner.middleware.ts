import { NextFunction, Request, Response } from "express";

import { prisma } from "../prismaClient";
import { AppError } from "../errors/appError";

const isCommentOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const comment = await prisma.comment.findUnique({
    where: {
      id: req.params.id,
    },
  });

  if (!comment) {
    throw new AppError(404, "Comentário não encontrado");
  }

  if (comment.userId !== req.user.userId) {
    throw new AppError(
      403,
      "Apenas dono do comentário pode excluir/editar comentário"
    );
  }

  next();
};

export default isCommentOwnerMiddleware;

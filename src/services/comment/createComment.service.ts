import { AppError } from "../../errors/appError";
import { ICommentRequest } from "../../interfaces";
import { prisma } from "../../prismaClient";

const createCommentService = async ({
  comment,
  userId,
  vehicleId,
}: ICommentRequest) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError(404, "Usuário não encontrado");
  }

  const vehicle = await prisma.vehicle.findUnique({
    where: {
      id: vehicleId,
    },
  });

  if (!vehicle) {
    throw new AppError(404, "Veículo não encontrado");
  }

  const newComment = await prisma.comment.create({
    data: {
      comment,
      userId,
      vehicleId,
    },
  });

  return newComment;
};

export default createCommentService;

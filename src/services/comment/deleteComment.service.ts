import { AppError } from "../../errors/appError";
import { prisma } from "../../prismaClient";

const deleteCommentService = async (id: string) => {
  const comment = await prisma.comment.findUnique({
    where: {
      id,
    },
  });

  if (!comment) {
    throw new AppError(404, "Comentário não encontrado");
  }

  await prisma.comment.delete({
    where: {
      id,
    },
  });

  return null;
};

export default deleteCommentService;

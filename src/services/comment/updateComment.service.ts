import { AppError } from "../../errors/appError";
import { prisma } from "../../prismaClient";

const updateCommentService = async (comment: string, id: string) => {
  const commentExists = await prisma.comment.findUnique({
    where: {
      id,
    },
  });

  if (!commentExists) {
    throw new AppError(404, "Comentário não encontrado");
  }

  const newComment = await prisma.comment.update({
    where: {
      id,
    },
    data: {
      comment,
    },
  });

  return newComment;
};

export default updateCommentService;

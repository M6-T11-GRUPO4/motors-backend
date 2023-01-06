import { prisma } from "../../prismaClient";

const updateCommentService = async (comment: string, id: string) => {
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

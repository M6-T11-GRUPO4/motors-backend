import { prisma } from "../../prismaClient";

const deleteCommentService = async (id: string) => {
  await prisma.comment.delete({
    where: {
      id,
    },
  });

  return null;
};

export default deleteCommentService;

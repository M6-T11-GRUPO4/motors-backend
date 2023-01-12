import { prisma } from "../../prismaClient";

const listAllCommentsService = async () => {
  const comments = await prisma.comment.findMany();

  return comments.reverse();
};

export default listAllCommentsService;

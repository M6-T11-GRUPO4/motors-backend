import { prisma } from "../../prismaClient";

const listCommentsByVehicleService = async (vehicleId: string) => {
  const comments = await prisma.comment.findMany({
    where: {
      vehicleId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return comments.reverse();
};

export default listCommentsByVehicleService;

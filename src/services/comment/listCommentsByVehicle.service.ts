import { prisma } from "../../prismaClient";

const listCommentsByVehicleService = async (vehicleId: string) => {
  const comments = await prisma.comment.findMany({
    where: {
      vehicleId,
    },
  });

  return comments.reverse();
};

export default listCommentsByVehicleService;

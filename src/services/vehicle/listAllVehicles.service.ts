import { prisma } from "../../prismaClient";

const listAllVehiclesService = async () => {
  const returnVehicle = await prisma.vehicle.findMany({
    include: {
      image: {
        select: {
          url: true,
        },
      },
    },
  });

  return returnVehicle;
};

export default listAllVehiclesService;

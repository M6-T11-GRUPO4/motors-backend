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

  return returnVehicle.reverse();
};



export default listAllVehiclesService;

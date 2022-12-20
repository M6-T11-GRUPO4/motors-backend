import { IVehicleId, IVehicleRequest } from "../../interfaces";
import { prisma } from "../../prismaClient";

const listVehicleByIdService = async ({id}: IVehicleId) => {

  const returnVehicle = await prisma.vehicle.findUnique({
    where: {
      id: id
    },
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

export default listVehicleByIdService;

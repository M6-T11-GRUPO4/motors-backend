import { IVehicleId, IVehicleRequest } from "../../interfaces";
import { prisma } from "../../prismaClient";

const listImagesByIdVehicleService = async ({id}: IVehicleId) => {

  const returnVehicle = await prisma.vehicle.findUnique({
    where: {
      id: id
    },
    select: {
      image: {
        select: {
          url: true,
        },
      },
    },
  });

  return returnVehicle;
};

export default listImagesByIdVehicleService;

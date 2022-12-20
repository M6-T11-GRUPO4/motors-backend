import { AppError } from "../../errors/appError";
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

  if(returnVehicle === null){
    throw new AppError(400, "Veículo não encontrado")
  }

  return returnVehicle;
};

export default listImagesByIdVehicleService;

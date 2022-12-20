import { AppError } from "../../errors/appError";
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

  if(returnVehicle === null){
    throw new AppError(400, "Veículo não encontrado")
  }

  return returnVehicle;
};

export default listVehicleByIdService;
